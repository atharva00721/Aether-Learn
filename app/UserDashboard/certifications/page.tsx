import Link from "next/link";
import { ArrowUpRight, CreditCard } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { Navbar } from "@/components/admin-panel/navbar";
interface CertificationsProps {
  icon: string;
  title: string;
  description: string;
}

const certificationsList: CertificationsProps[] = [
  {
    icon: "CreditCard",
    title: "Graphic Design for Beginners",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    icon: "CreditCard",
    title: "Digital Marketing Masterclass",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
  {
    icon: "CreditCard",
    title: "Graphic Design for Beginners",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam",
  },
  {
    icon: "CreditCard",
    title: "Introduction to Python Programming",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];

export default function Certifications() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar title="Certifications" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Certifications</CardTitle>
                <CardDescription>All your certifications</CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-4 w-full">
                {certificationsList.map(
                  ({ icon, title, description }, index) => (
                    <Card
                      key={title}
                      className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
                    >
                      <CardHeader>
                        <div className="flex justify-between">
                          <Icon
                            name={icon as keyof typeof icons}
                            size={32}
                            color="hsl(var(--primary))"
                            className="mb-6 text-primary"
                          />
                          <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                            0{index + 1}
                          </span>
                        </div>

                        <CardTitle>{title}</CardTitle>
                      </CardHeader>

                      <CardContent className="text-muted-foreground">
                        {description}
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
