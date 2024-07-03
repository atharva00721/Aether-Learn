import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="relative group my-auto bg-primary/50 ">
      <div className="flex flex-col justify-center items-center h-screen z-5 gap-2">
        <div className="flex justify-start items-start">
          <Link href={"/"}>
            <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number">
              <CardHeader>
                <div className="flex justify-between">
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    <ArrowUpLeft className="font-black h-65 w-65" />
                  </span>
                </div>
                <CardTitle>Go Back</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </div>
        <SignUp />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 md:h-28  rounded-lg"></div>
    </div>
  );
}
