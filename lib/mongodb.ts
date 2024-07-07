import { MongoClient, Db, Collection } from 'mongodb';
import { Course } from '../types/types';

const uri = process.env.MONGODB_URI as string;
const dbName = 'AetherLearn';
const collectionName = 'Courses';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectToDatabase(uri: string) {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);

  await client.connect();
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function getCoursesCollection() {
  const { db } = await connectToDatabase(uri);
  return db.collection<Course>(collectionName);
}

export default connectToDatabase;


// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI as string;

// if (!uri) {
//   throw new Error('Please add your Mongo URI to .env.local');
// }

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable to preserve the value
//   if (!(global as any)._mongoClientPromise) {
//     client = new MongoClient(uri);
//     (global as any)._mongoClientPromise = client.connect();
//   }
//   clientPromise = (global as any)._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable
//   client = new MongoClient(uri);
//   clientPromise = client.connect();
// }

// export default clientPromise;
