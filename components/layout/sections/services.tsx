import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Introduction to Python Programming",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing.",
    pro: 1,
  },
  {
    title: "Digital Marketing Masterclass",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.",
    pro: 1,
  },
  {
    title: "Graphic Design for Beginners",
    description: "Lorem dolor sit amet adipisicing.",
    pro: 1,
  },
  {
    title: "Data Science and Machine Learning",
    description: "Lorem ipsum dolor sit amet consectetur.",
    pro: 1,
  },
];

export const TopCoursesSection = () => {
  return (
    <section id="courses" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Start Learning Today
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Featured Courses
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Ready to take the next step in your learning journey? Sign up now and
        start exploring our courses. With Aether Learn, the possibilities are
        endless.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              Certification
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
