"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/admin-panel/navbar";
import { Badge } from "@/components/ui/badge";
import { coursesList } from "@/constant/coursesList";

const CoursePage = () => {
  const { course } = useParams();
  const courseId = course.toString().replace(/%20/g, " ");

  const selectedCourse = coursesList.find((c) => c.title === courseId);

  if (!selectedCourse) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Navbar title="Course Not Found" />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader>
                <CardTitle>Course Not Found</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The course you're looking for does not exist.</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar title={selectedCourse.title} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Modules</CardTitle>
                <CardDescription>
                  Total {selectedCourse.totalModules} modules in this course
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {selectedCourse.modules.map(
                ({ moduleTitle, lessons }, moduleIndex) => (
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    key={moduleIndex}
                  >
                    <AccordionItem value={moduleTitle} key={moduleIndex}>
                      <AccordionTrigger>
                        <Card className="border-none bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number">
                          <CardHeader>
                            <div className="flex justify-between">
                              <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                                0{moduleIndex + 1}
                              </span>
                            </div>
                            <CardTitle>{moduleTitle}</CardTitle>
                          </CardHeader>
                        </Card>
                      </AccordionTrigger>
                      <AccordionContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Lesson</TableHead>
                              <TableHead className="text-right">
                                Status
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {lessons.map((lesson, lessonIndex) => (
                              <TableRow key={lessonIndex}>
                                <TableCell>
                                  <div className="font-medium">{lesson}</div>
                                </TableCell>
                                <TableCell className="text-right">
                                  <Badge>
                                    <CheckCircle2 className="mr-2" /> Done
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
