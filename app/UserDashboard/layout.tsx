import type { Metadata } from "next";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export const metadata: Metadata = {
  title: "Aether Learn",
  description: "Aether Learn ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<AdminPanelLayout>{children}</AdminPanelLayout>);
}
