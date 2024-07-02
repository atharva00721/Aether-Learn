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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    }
];

