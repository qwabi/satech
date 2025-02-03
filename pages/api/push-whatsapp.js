import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch'; // Use fetch in older Node.js versions
import tmp from 'tmp';
import Pushover from 'pushover-notifications';

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

  const title = 'New Whatsapp button Click!';
  const message = `
    Hi Chucks, Somone is trying to contact you via whatsapp on your website, please check your whatsapp for more details.
  `;

  const msgOptions = {
    message, // Required
    title, // Optional
    sound: 'magic', // Optional (Pushover provides various sound options)
    priority: 1, // Optional
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
