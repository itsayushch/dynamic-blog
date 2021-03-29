import { fetchArticle } from '../../lib/blog';

export default async function post(req, res) {
  try {
    const data = await fetchArticle(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }
}
