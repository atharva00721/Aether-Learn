import Link from "next/link";
import { ArrowUpRight, Book } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const getLatestOpenedCourse = () => {
  return coursesList.reduce((latest, course) => {
    return new Date(course.lastOpened) > new Date(latest.lastOpened)
      ? course
      : latest;
  }, coursesList[0]);
};

export default function Dashboard() {
  const latestOpenedCourse = getLatestOpenedCourse();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar title="Dashboard" />

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
          <Link href={`/UserDashboard/courses/${latestOpenedCourse.title}`}>
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex justify-between w-full">
                  Active Course
                  <ArrowUpRight className="h-4 w-4" />

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
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Test</CardTitle>
              <Book className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24/12/2024</div>
              <p className="text-xs text-muted-foreground">
                Final Certification Test
              </p>
            </CardContent>
          </Card>
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
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead className="sm:table-column">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coursesList.slice(0, 5).map((course) => (
                    <TableRow key={course.uid}>
                      <TableCell>
                        <div className="font-medium">{course.title}</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          By {course.description}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {course.progress}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
