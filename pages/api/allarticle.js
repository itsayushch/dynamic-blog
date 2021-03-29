import { allArticles } from '../../lib/blog';

export default async function post(req, res) {
  try {
    const data = await allArticles();
    res.status(200).json(data);
  } catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }
}
