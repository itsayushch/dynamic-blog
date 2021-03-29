import { MongoClient } from 'mongodb';

let cached = global.mongo;

if (!cached) {
	cached = global.mongo = { conn: null, promise: null }
}

class Database extends MongoClient {
	constructor() {
		super(process.env.DATABASE, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	}
}

export const connectToDatabase = async () => {
	if (cached.conn) {
		return cached.conn
	}

	if (!cached.promise) {
		cached.promise = new Database().connect().then((client) => {
			return {
				client,
				db: client.db(process.env.DB_NAME),
			}
		})
	}
	cached.conn = await cached.promise
	return cached.conn
}
