import { useState } from "react";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "./components/ui/sidebar";
import { Separator } from "./components/ui/separator";
import { Button } from "@/components/ui/button";
import PersonalDetailsForm, { PersonalDetails, PersonalDetailsSubmission } from "./components/personal-details-submission";


function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data); // Store submitted form data in state
  };

  return (
    <SidebarProvider>
      <AppSidebar onFormSubmit={handleFormSubmit} />
      <SidebarInset>
      <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Button variant="link">Download</Button>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Button className="text-red-500" variant="link">Clear</Button>
        </header>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Personal Details Submission</h1>
          {/* Display submitted data */}
          {formData ? (
            <PersonalDetailsSubmission data={formData} />
          ) : (
            <p>No data submitted yet.</p>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
