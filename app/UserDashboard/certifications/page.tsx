import { Navbar } from "@/components/admin-panel/navbar";

import Certificate from "@/components/layout/certificateDisplay";

export default function Certificates() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar title="Certifications" />
      <Certificate />
    </div>
  );
}
