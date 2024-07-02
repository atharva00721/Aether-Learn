import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
import { coursesList } from "@/constant/coursesList";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar title="Courses" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Courses</CardTitle>
                <CardDescription>All your courses</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-4 w-full">
                {coursesList.map(
                  (
                    {
                      uid,
                      icon,
                      title,
                      description,
                      progress,
                    }: {
                      uid: string;
                      icon: string;
                      title: string;
                      description: string;
                      progress: string;
                    },
                    index: number
                  ) => (
                    <Link href={`/UserDashboard/courses/${ title }`} key={uid}>
                      <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number">
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
                        <CardContent className="text-muted-foreground flex justify-between">
                          {description}
                          <Badge className="text-right">{progress}</Badge>
                        </CardContent>
                      </Card>
                    </Link>
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
