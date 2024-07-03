"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Certificate from "@/components/layout/certificateDisplay";
import { Navbar } from "@/components/admin-panel/navbar";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Dashboard() {
  const { user, isLoaded } = useUser();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar title="User Information" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="grid gap-2">
                <CardTitle>User Information</CardTitle>
                <CardDescription>All we know about you ;p</CardDescription>
              </div>
              {/* <Credenza>
                <CredenzaTrigger asChild>
                  <Button>Edit</Button>
                </CredenzaTrigger>
                <CredenzaContent>
                  <CredenzaHeader>
                    <CredenzaTitle>Edit profile</CredenzaTitle>
                    <CredenzaDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </CredenzaDescription>
                  </CredenzaHeader>
                  <CredenzaBody>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue={user?.fullName || ""}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue={user?.username || ""}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue={user?.fullName || ""}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  </CredenzaBody>
                  <CredenzaFooter>
                    <CredenzaClose asChild>
                      <Button type="submit">Save changes</Button>
                    </CredenzaClose>
                  </CredenzaFooter>
                </CredenzaContent>
              </Credenza> */}
            </CardHeader>
            <CardContent className="grid lg:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium flex justify-between"></CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <span className="text-2xl font-bold">Profile Picture</span>
                  <Image
                    src={user?.imageUrl || ""}
                    height={300}
                    width={300}
                    alt="User Img"
                    className="rounded-xl"
                  />
                </CardContent>
              </Card>

              <div className="text-2xl font-bold flex flex-col gap-4">
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium flex justify-between w-full">
                      Name{" "}
                      <span className="text-muted-foreground">
                        this will be used while creating your certificate
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-between">
                    <div>
                      Hello,{" "}
                      <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                        {user?.fullName}
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium flex justify-between w-full">
                      Username
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{user?.username}</CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium flex justify-between w-full">
                      Name
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{user?.emailAddresses.toString()}</CardContent>
                </Card>
              </div>
            </CardContent>
            <div>
              <Certificate />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
