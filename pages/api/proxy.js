import { put, list, del } from '@vercel/blob';

export default async function handler(req, res) {
  const { method } = req;
  const token = process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN;
  try {
    let result;
    switch (method) {
      case 'GET':
        result = await list({ token });
        break;
      case 'POST':
        const { name, data, options } = req.body;
        result = await put(name, data, options);
        break;
      case 'DELETE':
        const { url } = req.body;
        result = await del(url);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
        return;
    }
    res.status(200).json(result);
  } catch (error) {
    console.error('Blob operation error:', error);
    res.status(500).json({ error: 'Failed to perform blob operation' });
  }
}
