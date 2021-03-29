import crypto from 'crypto'
import { connectToDatabase } from './database';

export async function createUser({ username, password }) {
	const { db } = await connectToDatabase();

	const salt = crypto.randomBytes(16).toString('hex')
	const hash = crypto
		.pbkdf2Sync(password, salt, 1000, 64, 'sha512')
		.toString('hex');

	await db.collection('admins').updateOne({ username }, {
		$set: {
			createdAt: Date.now(),
			hash,
			salt
		}
	}, { upsert: true });

	return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
	const { db } = await connectToDatabase();

	const data = await db.collection('admins').findOne({ username });

	return data;
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
	const inputHash = crypto
		.pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
		.toString('hex')
	const passwordsMatch = user.hash === inputHash
	return passwordsMatch
}
