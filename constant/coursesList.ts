type Lesson = string;

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

export const coursesList: Course[] = [
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
                    "Lesson 1: What is Graphic Design?",
                    "Lesson 2: Basic Principles of Design",
                    "Lesson 3: Tools of the Trade"
                ]
            },
            {
                moduleTitle: "Advanced Techniques",
                lessons: [
                    "Lesson 1: Color Theory",
                    "Lesson 2: Typography",
                    "Lesson 3: Layout and Composition"
                ]
            }
        ],
        lastOpened: "2024-06-20T14:32:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course2",
        title: "Digital Marketing Masterclass",
        description: "Olivia Smith",
        progress: "69%",
        totalModules: 3,
        modules: [
            {
                moduleTitle: "Introduction to Digital Marketing",
                lessons: [
                    "Lesson 1: Digital Marketing Overview",
                    "Lesson 2: Key Concepts",
                    "Lesson 3: The Digital Marketing Funnel"
                ]
            },
            {
                moduleTitle: "SEO and SEM",
                lessons: [
                    "Lesson 1: Introduction to SEO",
                    "Lesson 2: Advanced SEO Techniques",
                    "Lesson 3: SEM Strategies"
                ]
            },
            {
                moduleTitle: "Social Media Marketing",
                lessons: [
                    "Lesson 1: Social Media Platforms",
                    "Lesson 2: Content Strategy",
                    "Lesson 3: Analytics and Optimization"
                ]
            }
        ],
        lastOpened: "2024-06-18T10:15:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course3",
        title: "Graphic Design for Beginners",
        description: "Noah Williams",
        progress: "80%",
        totalModules: 2,
        modules: [
            {
                moduleTitle: "Introduction to Graphic Design",
                lessons: [
                    "Lesson 1: What is Graphic Design?",
                    "Lesson 2: Basic Principles of Design",
                    "Lesson 3: Tools of the Trade"
                ]
            },
            {
                moduleTitle: "Practical Projects",
                lessons: [
                    "Lesson 1: Creating a Logo",
                    "Lesson 2: Designing a Poster",
                    "Lesson 3: Making a Business Card"
                ]
            }
        ],
        lastOpened: "2024-06-21T09:45:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course4",
        title: "Introduction to Python Programming",
        description: "Emma Brown",
        progress: "0%",
        totalModules: 1,
        modules: [
            {
                moduleTitle: "Getting Started with Python",
                lessons: [
                    "Lesson 1: Installing Python",
                    "Lesson 2: Python Basics",
                    "Lesson 3: Writing Your First Program"
                ]
            }
        ],
        lastOpened: "2024-06-17T16:00:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course5",
        title: "Creative Writing Workshop",
        description: "Sophia Davis",
        progress: "45%",
        totalModules: 2,
        modules: [
            {
                moduleTitle: "Foundations of Creative Writing",
                lessons: [
                    "Lesson 1: Understanding Story Elements",
                    "Lesson 2: Developing Characters",
                    "Lesson 3: Crafting a Plot"
                ]
            },
            {
                moduleTitle: "Advanced Writing Techniques",
                lessons: [
                    "Lesson 1: Writing Dialogue",
                    "Lesson 2: Using Literary Devices",
                    "Lesson 3: Editing and Revising"
                ]
            }
        ],
        lastOpened: "2024-06-19T11:20:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course6",
        title: "Basics of Web Development",
        description: "James Miller",
        progress: "30%",
        totalModules: 3,
        modules: [
            {
                moduleTitle: "HTML and CSS",
                lessons: [
                    "Lesson 1: Introduction to HTML",
                    "Lesson 2: Styling with CSS",
                    "Lesson 3: Responsive Design"
                ]
            },
            {
                moduleTitle: "JavaScript Basics",
                lessons: [
                    "Lesson 1: JavaScript Fundamentals",
                    "Lesson 2: DOM Manipulation",
                    "Lesson 3: Event Handling"
                ]
            },
            {
                moduleTitle: "Building a Website",
                lessons: [
                    "Lesson 1: Setting Up a Project",
                    "Lesson 2: Creating Web Pages",
                    "Lesson 3: Deployment and Hosting"
                ]
            }
        ],
        lastOpened: "2024-06-22T14:00:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course7",
        title: "Photography Basics",
        description: "Ethan Harris",
        progress: "100%",
        totalModules: 2,
        modules: [
            {
                moduleTitle: "Introduction to Photography",
                lessons: [
                    "Lesson 1: Camera Basics",
                    "Lesson 2: Understanding Exposure",
                    "Lesson 3: Composition Techniques"
                ]
            },
            {
                moduleTitle: "Advanced Photography",
                lessons: [
                    "Lesson 1: Portrait Photography",
                    "Lesson 2: Landscape Photography",
                    "Lesson 3: Post-Processing"
                ]
            }
        ],
        lastOpened: "2024-06-20T13:30:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course8",
        title: "Introduction to Data Science",
        description: "Ava Martinez",
        progress: "50%",
        totalModules: 3,
        modules: [
            {
                moduleTitle: "Data Science Basics",
                lessons: [
                    "Lesson 1: What is Data Science?",
                    "Lesson 2: Data Analysis Techniques",
                    "Lesson 3: Data Visualization"
                ]
            },
            {
                moduleTitle: "Data Processing",
                lessons: [
                    "Lesson 1: Cleaning Data",
                    "Lesson 2: Transforming Data",
                    "Lesson 3: Data Integration"
                ]
            },
            {
                moduleTitle: "Machine Learning",
                lessons: [
                    "Lesson 1: Introduction to Machine Learning",
                    "Lesson 2: Supervised Learning",
                    "Lesson 3: Unsupervised Learning"
                ]
            }
        ],
        lastOpened: "2024-06-18T15:45:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course9",
        title: "Introduction to Public Speaking",
        description: "Mia Johnson",
        progress: "100%",
        totalModules: 2,
        modules: [
            {
                moduleTitle: "Public Speaking Fundamentals",
                lessons: [
                    "Lesson 1: Overcoming Fear",
                    "Lesson 2: Structuring Your Speech",
                    "Lesson 3: Engaging Your Audience"
                ]
            },
            {
                moduleTitle: "Advanced Public Speaking",
                lessons: [
                    "Lesson 1: Persuasive Speaking",
                    "Lesson 2: Using Visual Aids",
                    "Lesson 3: Handling Q&A"
                ]
            }
        ],
        lastOpened: "2024-06-22T09:10:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course10",
        title: "Introduction to Financial Management",
        description: "Isabella Garcia",
        progress: "75%",
        totalModules: 3,
        modules: [
            {
                moduleTitle: "Financial Management Basics",
                lessons: [
                    "Lesson 1: Understanding Financial Statements",
                    "Lesson 2: Budgeting",
                    "Lesson 3: Cash Flow Management"
                ]
            },
            {
                moduleTitle: "Investment Strategies",
                lessons: [
                    "Lesson 1: Stock Market Basics",
                    "Lesson 2: Bonds and Mutual Funds",
                    "Lesson 3: Real Estate Investment"
                ]
            },
            {
                moduleTitle: "Advanced Financial Management",
                lessons: [
                    "Lesson 1: Risk Management",
                    "Lesson 2: Financial Planning",
                    "Lesson 3: Retirement Planning"
                ]
            }
        ],
        lastOpened: "2024-06-21T17:25:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course11",
        title: "Basics of Cooking",
        description: "Charlotte Anderson",
        progress: "100%",
        totalModules: 2,
        modules: [
            {
                moduleTitle: "Cooking Fundamentals",
                lessons: [
                    "Lesson 1: Kitchen Safety",
                    "Lesson 2: Basic Knife Skills",
                    "Lesson 3: Cooking Techniques"
                ]
            },
            {
                moduleTitle: "Advanced Cooking",
                lessons: [
                    "Lesson 1: Sauces and Seasonings",
                    "Lesson 2: Baking Basics",
                    "Lesson 3: International Cuisines"
                ]
            }
        ],
        lastOpened: "2024-06-20T12:50:00Z"
    },
    {
        icon: "NotebookText",
        uid: "course12",
        title: "Introduction to Project Management",
        description: "Lily Robinson",
        progress: "40%",
        totalModules: 3,
        modules: [
            {
                moduleTitle: "Project Management Basics",
                lessons: [
                    "Lesson 1: What is Project Management?",
                    "Lesson 2: Project Lifecycle",
                    "Lesson 3: Stakeholder Management"
                ]
            },
            {
                moduleTitle: "Planning and Execution",
                lessons: [
                    "Lesson 1: Project Planning",
                    "Lesson 2: Scheduling",
                    "Lesson 3: Resource Management"
                ]
            },
            {
                moduleTitle: "Advanced Project Management",
                lessons: [
                    "Lesson 1: Risk Management",
                    "Lesson 2: Quality Management",
                    "Lesson 3: Project Closure"
                ]
            }
        ],
        lastOpened: "2024-06-19T14:40:00Z"
    }
];


