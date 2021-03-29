import { editArticle } from '../../lib/blog';

export default async function post(req, res) {
  try {
    await editArticle(req.body);
    res.status(200).send({ done: true })
  } catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }
}
