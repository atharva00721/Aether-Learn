// pages/api/courses.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getCoursesCollection } from '@/lib/mongodb'; // Adjust path as per your setup

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const coursesCollection = await getCoursesCollection();
      const courses = await coursesCollection.find().toArray();

      res.status(200).json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Failed to fetch courses' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
