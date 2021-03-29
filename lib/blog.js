import { ObjectId } from 'mongodb';
import { connectToDatabase } from './database';

export const createArticle = async ({ title, body, slug, image, description, tags }) => {
	const { db } = await connectToDatabase();

	await db.collection('blogs').insertOne({
		title,
		createdAt: Date.now(),
		slug,
		body,
		image,
		description,
		tags
	});

	return { title, slug, createdAt: Date.now() }
}

export const fetchArticle = async ({ id }) => {
	const { db } = await connectToDatabase();

	const data = await db.collection('blogs').findOne({ slug: id });

	return data;
}

export const allArticles = async () => {
	const { db } = await connectToDatabase();

	const data = await db.collection('blogs')
		.find()
		.sort({ createdAt: -1 })
		.toArray();

	return data;
} 

export const editArticle = async ({ _id, title, body, slug, image, description, tags }) => {
	const { db } = await connectToDatabase();

	const data = await db.collection('blogs').updateOne({ _id: new ObjectId(_id) }, {
		$set: {
			title,
			body,
			image,
			description,
			tags,
			slug
		}
	});

	return data;
}