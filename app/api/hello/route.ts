import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('sample_database'); // replace with your database name

    const data = await db.collection('sample_collection').find({}).toArray(); // replace with your collection name

    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}
