import { useState } from "react";
import { AppSidebar } from "./components/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "./components/ui/sidebar";
import { Separator } from "./components/ui/separator";
import { Button } from "@/components/ui/button";
import { PersonalDetailsSubmission } from "./components/personal-details-submission";
import { EducationSubmission } from "./components/education";

function App() {
  const [personalDetailsData, setPersonalDetailsFormData] = useState(null);
  const [educationData, setEducationData] = useState(null);

  const handlePersonalDetailsSubmit = (data) => {
    setPersonalDetailsFormData(data);
  };

  const handleEducationSubmit = (data) => {
    setEducationData(data);
  };

  return (
    <SidebarProvider>
      <AppSidebar
        onPersonalDetailsSubmit={handlePersonalDetailsSubmit}
        onEducationSubmit={handleEducationSubmit}
      />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Button variant="link">Download</Button>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Button className="text-red-500" variant="link">
            Clear
          </Button>
        </header>
        <div className="p-4">
          {/* Display submitted data */}
          {personalDetailsData ? (
            <PersonalDetailsSubmission data={personalDetailsData} />
          ) : (
            <p>No data submitted yet.</p>
          )}
        </div>
        <div className="p-4">
          {educationData ? (
            <EducationSubmission data={educationData} />
          ) : (
            <p>No data submitted yet.</p>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
