import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch'; // Use fetch in older Node.js versions
import tmp from 'tmp';
import Pushover from 'pushover-notifications';

const downloadImage = async (imageUrl) => {
  const res = await fetch(imageUrl);
  if (!res.ok) {
    throw new Error('Failed to download image');
  }

  const buffer = await res.buffer();
  return buffer;
};

const saveImageToTempFile = async (imageUrl) => {
  const imageBuffer = await downloadImage(imageUrl);
  return new Promise((resolve, reject) => {
    tmp.file(
      { prefix: 'push-notification-', postfix: '.jpg' },
      (err, tempPath, fd, cleanupCallback) => {
        if (err) return reject(err);

        // Write the image buffer to the temporary file
        fs.writeFile(tempPath, imageBuffer, (err) => {
          if (err) return reject(err);

          resolve({ tempPath, cleanupCallback });
        });
      }
    );
  });
};
const sendPushNotification = async (data) => {
  const adminUserKey = process.env.NEXT_PUBLIC_PUSHOVER_USER_KEY;
  const pushoverApiToken = process.env.NEXT_PUBLIC_PUSHOVER_API_TOKEN;

  if (!adminUserKey || !pushoverApiToken) {
    console.error('Pushover user key or API token is missing.');
    return;
  }

  const pusher = new Pushover({
    user: adminUserKey,
    token: pushoverApiToken,
  });

  const title = 'New Service Request!';
  const message = `
    Hi Chucks, You have received a new booking with the following details:

    Name: ${data.name}
    Address: ${data.address}
    Problem: ${data.problem}
    Cellphone: ${data.phone}
    Email: ${data.email}
    
    Click this link to WhatsApp: https://wa.me/${data.phone}
  `;
  const url = `https://wa.me/${data.phone}`;
  const { tempPath, cleanupCallback } = await saveImageToTempFile(
    data.images[0]
  );

  console.log('Image Url:', data.images[0], '\n Image Path:', tempPath);
  const msgOptions = {
    message, // Required
    title, // Optional
    sound: 'magic', // Optional (Pushover provides various sound options)
    priority: 1, // Optional
    url,
    url_title: 'Chat on Whatsapp',
    file: tempPath,
  };
  console.log(msgOptions);
  try {
    pusher.send(msgOptions, (err, result) => {
      if (err) {
        console.error('Error sending Pushover notification:', err);
        return;
      }
      console.log('Push sent successfully!', result);
    });
    cleanupCallback();
  } catch (error) {
    console.error('Unexpected error sending Pushover notification:', error);
  }
};

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const data = req.body;
      await sendPushNotification(data);
      res.status(200).json({ message: 'Callback updated successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in handler:', error);
    res.status(500).json({ message: 'Something went wrong', error });
  }
}
