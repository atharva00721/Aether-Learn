"use client";
import Link from "next/link";
import { ArrowUpRight, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { coursesList } from "@/constant/coursesList";
import { Navbar } from "@/components/admin-panel/navbar";
import { useUser } from "@clerk/nextjs";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

const getLatestOpenedCourse = () => {
  return coursesList.reduce((latest, course) => {
    return new Date(course.lastOpened) > new Date(latest.lastOpened)
      ? course
      : latest;
  }, coursesList[0]);
};

export default function Dashboard() {
  const latestOpenedCourse = getLatestOpenedCourse();
  const { user, isLoaded } = useUser();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar title="Dashboard" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              {(isLoaded && (
                <CardTitle className="text-sm font-medium flex justify-between w-full">
                  Hello
                </CardTitle>
              )) || <Skeleton className="h-2 w-20 rounded-full" />}
              <Book className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {(isLoaded && (
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                  {user?.fullName}
                </div>
              )) || <Skeleton className="h-6 w-50 rounded-full mb-2" />}

              <p className="text-xs text-muted-foreground">Let&apos;s Learn</p>
            </CardContent>
          </Card>
          <Link href={`/UserDashboard/courses/${latestOpenedCourse.title}`}>
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex justify-between w-full">
                  Active Course
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {latestOpenedCourse.title}
                </div>
                <p className="text-xs text-muted-foreground">
                  Last opened on{" "}
                  {new Date(latestOpenedCourse.lastOpened).toLocaleDateString()}
                  {" : "}
                  {latestOpenedCourse.progress}
                  {" Completed "}
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-1 xl:grid-cols-1">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Courses</CardTitle>
                <CardDescription>
                  All your courses and certifications
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="/UserDashboard/courses">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="grid gap-2 md:grid-cols-1 md:gap-8 lg:grid-cols-2 ">
              {coursesList.slice(0, 4).map((course, index: number) => (
                <Link href="#" key={course.uid}>
                  <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number">
                    <CardHeader>
                      <div className="flex justify-between">
                        <Icon
                          name={course.icon as keyof typeof icons}
                          size={32}
                          color="hsl(var(--primary))"
                          className="mb-6 text-primary"
                        />
                        <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                          0{index + 1}
                        </span>
                      </div>
                      <CardTitle>{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground flex justify-between">
                      {course.description}
                      <Badge className="text-right">{course.progress}</Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
