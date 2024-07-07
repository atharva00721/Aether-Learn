import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);



interface Lesson {
  module: string;
}

interface Module {
  moduleTitle: string;
  lessons: Lesson[];
}

interface Course {
  icon: string;
  uid: string;
  title: string;
  description: string;
  progress: string;
  totalModules: number;
  modules: Module[];
  lastOpened: string;
}

const coursesList: Course[] = [
    {
      uid: "course1",
      icon: "NotebookText",
      title: "Graphic Design for Beginners",
      description: "Liam Johnson",
      progress: "100%",
      totalModules: 2,
      modules: [
        {
          moduleTitle: "Introduction to Graphic Design",
          lessons: [
            { module: "Lesson 1: What is Graphic Design?" },
            { module: "Lesson 2: Basic Principles of Design" },
            { module: "Lesson 3: Tools of the Trade" },
          ],
        },
        {
          moduleTitle: "Advanced Techniques",
          lessons: [
            { module: "Lesson 1: Color Theory" },
            { module: "Lesson 2: Typography" },
            { module: "Lesson 3: Layout and Composition" },
          ],
        },
      ],
      lastOpened: "2024-06-20T14:32:00Z",
    },
    {
      uid: "course2",
      icon: "NotebookText",
      title: "Digital Marketing Masterclass",
      description: "Olivia Smith",
      progress: "69%",
      totalModules: 3,
      modules: [
        {
          moduleTitle: "Introduction to Digital Marketing",
          lessons: [
            { module: "Lesson 1: Digital Marketing Overview" },
            { module: "Lesson 2: Key Concepts" },
            { module: "Lesson 3: The Digital Marketing Funnel" },
          ],
        },
        {
          moduleTitle: "SEO and SEM",
          lessons: [
            { module: "Lesson 1: Introduction to SEO" },
            { module: "Lesson 2: Advanced SEO Techniques" },
            { module: "Lesson 3: SEM Strategies" },
          ],
        },
        {
          moduleTitle: "Social Media Marketing",
          lessons: [
            { module: "Lesson 1: Social Media Platforms" },
            { module: "Lesson 2: Content Strategy" },
            { module: "Lesson 3: Analytics and Optimization" },
          ],
        },
      ],
      lastOpened: "2024-06-18T10:15:00Z",
    },
    {
      uid: "course3",
      icon: "NotebookText",
      title: "Graphic Design for Beginners",
      description: "Noah Williams",
      progress: "80%",
      totalModules: 2,
      modules: [
        {
          moduleTitle: "Introduction to Graphic Design",
          lessons: [
            { module: "Lesson 1: What is Graphic Design?" },
            { module: "Lesson 2: Basic Principles of Design" },
            { module: "Lesson 3: Tools of the Trade" },
          ],
        },
        {
          moduleTitle: "Practical Projects",
          lessons: [
            { module: "Lesson 1: Creating a Logo" },
            { module: "Lesson 2: Designing a Poster" },
            { module: "Lesson 3: Making a Business Card" },
          ],
        },
      ],
      lastOpened: "2024-06-21T09:45:00Z",
    },
    {
      uid: "course4",
      icon: "NotebookText",
      title: "Introduction to Python Programming",
      description: "Emma Brown",
      progress: "0%",
      totalModules: 1,
      modules: [
        {
          moduleTitle: "Getting Started with Python",
          lessons: [
            { module: "Lesson 1: Installing Python" },
            { module: "Lesson 2: Python Basics" },
            { module: "Lesson 3: Writing Your First Program" },
          ],
        },
      ],
      lastOpened: "2024-06-17T16:00:00Z",
    },
    {
      uid: "course5",
      icon: "NotebookText",
      title: "Creative Writing Workshop",
      description: "Sophia Davis",
      progress: "45%",
      totalModules: 2,
      modules: [
        {
          moduleTitle: "Foundations of Creative Writing",
          lessons: [
            { module: "Lesson 1: Understanding Story Elements" },
            { module: "Lesson 2: Developing Characters" },
            { module: "Lesson 3: Crafting a Plot" },
          ],
        },
        {
          moduleTitle: "Advanced Writing Techniques",
          lessons: [
            { module: "Lesson 1: Writing Dialogue" },
            { module: "Lesson 2: Using Literary Devices" },
            { module: "Lesson 3: Editing and Revising" },
          ],
        },
      ],
      lastOpened: "2024-06-19T11:20:00Z",
    },
    {
      uid: "course6",
      icon: "NotebookText",
      title: "Basics of Web Development",
      description: "James Miller",
      progress: "30%",
      totalModules: 3,
      modules: [
        {
          moduleTitle: "HTML and CSS",
          lessons: [
            { module: "Lesson 1: Introduction to HTML" },
            { module: "Lesson 2: Styling with CSS" },
            { module: "Lesson 3: Responsive Design" },
          ],
        },
        {
          moduleTitle: "JavaScript Basics",
          lessons: [
            { module: "Lesson 1: JavaScript Fundamentals" },
            { module: "Lesson 2: DOM Manipulation" },
            { module: "Lesson 3: Event Handling" },
          ],
        },
        {
          moduleTitle: "Building a Website",
          lessons: [
            { module: "Lesson 1: Setting Up a Project" },
            { module: "Lesson 2: Creating Web Pages" },
            { module: "Lesson 3: Deployment and Hosting" },
          ],
        },
      ],
      lastOpened: "2024-06-22T14:00:00Z",
    },
    {
      uid: "course7",
      icon: "NotebookText",
      title: "Photography Basics",
      description: "Ethan Harris",
      progress: "100%",
      totalModules: 2,
      modules: [
        {
          moduleTitle: "Introduction to Photography",
          lessons: [
            { module: "Lesson 1: Camera Basics" },
            { module: "Lesson 2: Understanding Exposure" },
            { module: "Lesson 3: Composition Techniques" },
          ],
        },
        {
          moduleTitle: "Advanced Photography",
          lessons: [
            { module: "Lesson 1: Portrait Photography" },
            { module: "Lesson 2: Landscape Photography" },
            { module: "Lesson 3: Post-Processing" },
          ],
        },
      ],
      lastOpened: "2024-06-20T13:30:00Z",
    },
    {
      uid: "course8",
      icon: "NotebookText",
      title: "Introduction to Data Science",
      description: "Ava Martinez",
      progress: "50%",
      totalModules: 3,
      modules: [
        {
          moduleTitle: "Data Science Basics",
          lessons: [
            { module: "Lesson 1: What is Data Science?" },
            { module: "Lesson 2: Data Analysis Techniques" },
            { module: "Lesson 3: Data Visualization" },
          ],
        },
        {
          moduleTitle: "Data Processing",
          lessons: [
            { module: "Lesson 1: Cleaning Data" },
            { module: "Lesson 2: Transforming Data" },
            { module: "Lesson 3: Data Integration" },
          ],
        },
        {
          moduleTitle: "Machine Learning",
          lessons: [
            { module: "Lesson 1: Introduction to Machine Learning" },
            { module: "Lesson 2: Supervised Learning" },
            { module: "Lesson 3: Unsupervised Learning" },
          ],
        },
      ],
      lastOpened: "2024-06-18T15:45:00Z",
    },
    {
      uid: "course9",
      icon: "NotebookText",
      title: "Introduction to Public Speaking",
      description: "Mia Johnson",
      progress: "100%",
      totalModules: 2,
      modules: [
        {
          moduleTitle: "Public Speaking Fundamentals",
          lessons: [
            { module: "Lesson 1: Overcoming Fear" },
            { module: "Lesson 2: Structuring Your Speech" },
            { module: "Lesson 3: Engaging Your Audience" },
          ],
        },
        {
          moduleTitle: "Advanced Public Speaking",
          lessons: [
            { module: "Lesson 1: Persuasive Speaking" },
            { module: "Lesson 2: Using Visual Aids" },
            { module: "Lesson 3: Handling Q&A" },
          ],
        },
      ],
      lastOpened: "2024-06-22T09:10:00Z",
    },
    {
      uid: "course10",
      icon: "NotebookText",
      title: "Introduction to Financial Management",
      description: "Isabella Garcia",
      progress: "75%",
      totalModules: 3,
      modules: [
        {
          moduleTitle: "Financial Management Basics",
          lessons: [
            { module: "Lesson 1: Understanding Financial Statements" },
            { module: "Lesson 2: Budgeting" },
            { module: "Lesson 3: Cash Flow Management" },
          ],
        },
        {
          moduleTitle: "Investment Strategies",
          lessons: [
            { module: "Lesson 1: Stock Market Basics" },
            { module: "Lesson 2: Bonds and Mutual Funds" },
            { module: "Lesson 3: Real Estate Investment" },
          ],
        },
        {
          moduleTitle: "Advanced Financial Management",
          lessons: [
            { module: "Lesson 1: Risk Management" },
            { module: "Lesson 2: Financial Planning" },
            { module: "Lesson 3: Retirement Planning" },
          ],
        },
      ],
      lastOpened: "2024-06-21T17:25:00Z",
    },
    {
      uid: "course11",
      icon: "NotebookText",
      title: "Basics of Cooking",
      description: "Charlotte Anderson",
      progress: "100%",
      totalModules: 2,
      modules: [
        {
          moduleTitle: "Cooking Fundamentals",
          lessons: [
            { module: "Lesson 1: Kitchen Safety" },
            { module: "Lesson 2: Basic Knife Skills" },
            { module: "Lesson 3: Cooking Techniques" },
          ],
        },
        {
          moduleTitle: "Advanced Cooking",
          lessons: [
            { module: "Lesson 1: Sauces and Seasonings" },
            { module: "Lesson 2: Baking Basics" },
            { module: "Lesson 3: International Cuisines" },
          ],
        },
      ],
      lastOpened: "2024-06-20T12:50:00Z",
    },
    {
      uid: "course12",
      icon: "NotebookText",
      title: "Introduction to Project Management",
      description: "Lily Robinson",
      progress: "40%",
      totalModules: 3,
      modules: [
        {
          moduleTitle: "Project Management Basics",
          lessons: [
            { module: "Lesson 1: What is Project Management?" },
            { module: "Lesson 2: Project Lifecycle" },
            { module: "Lesson 3: Stakeholder Management" },
          ],
        },
        {
          moduleTitle: "Planning and Execution",
          lessons: [
            { module: "Lesson 1: Project Planning" },
            { module: "Lesson 2: Scheduling" },
            { module: "Lesson 3: Resource Management" },
          ],
        },
        {
          moduleTitle: "Advanced Project Management",
          lessons: [
            { module: "Lesson 1: Risk Management" },
            { module: "Lesson 2: Quality Management" },
            { module: "Lesson 3: Project Closure" },
          ],
        },
      ],
      lastOpened: "2024-06-19T14:40:00Z",
    },
  ];
  

async function insertCourses() {
  try {
    await client.connect(); 
    const database = client.db("AetherLearn"); 
    const collection = database.collection<Course>("Courses");

    const result = await collection.insertMany(coursesList);
    return (`${result.insertedCount} documents inserted`);

  } finally {
    await client.close(); 
  }
}

insertCourses().catch(console.error);
