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
import { ExperienceSubmission } from "./components/experience";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [personalDetailsData, setPersonalDetailsFormData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [firstExperienceData, setFirstExperienceData] = useState(null);
  const [secondExperienceData, setSecondExperienceData] = useState(null);
  const [thirdExperienceData, setThirdExperienceData] = useState(null);
  const [fourthExperienceData, setFourthExperienceData] = useState(null);

  const handlePersonalDetailsSubmit = (data) => {
    setPersonalDetailsFormData(data);
  };

  const handleEducationSubmit = (data) => {
    setEducationData(data);
  };

  const handleFirstExperienceSubmit = (data) => {
    setFirstExperienceData(data);
  };

  const handleSecondExperienceSubmit = (data) => {
    setSecondExperienceData(data);
  };

  const handleThirdExperienceSubmit = (data) => {
    setThirdExperienceData(data);
  };

  const handleFourthExperienceSubmit = (data) => {
    setFourthExperienceData(data);
  };

  return (
    <SidebarProvider>
      <AppSidebar
        onPersonalDetailsSubmit={handlePersonalDetailsSubmit}
        onEducationSubmit={handleEducationSubmit}
        onFirstExperienceSubmit={handleFirstExperienceSubmit}
        onSecondExperienceSubmit={handleSecondExperienceSubmit}
        onThirdExperienceSubmit={handleThirdExperienceSubmit}
        onFourthExperienceSubmit={handleFourthExperienceSubmit}
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
        <div className="max-w-[816px] m-auto w-full bg-white">
          <div className="p-4">
            {personalDetailsData ? (
              <PersonalDetailsSubmission data={personalDetailsData} />
            ) : (
              <p>Please complete the Personal Details form.</p>
            )}
          </div>
          <div className="p-4">
            {educationData ? (
              <EducationSubmission data={educationData} />
            ) : (
              <p>Please complete the Education form.</p>
            )}
          </div>
          <div className="p-4">
            {firstExperienceData ? (
              <>
                <h3 className="mb-2 text-xl font-semibold">
                  Employment Experience:
                </h3>
                <hr className="mb-2" />

                <ExperienceSubmission data={firstExperienceData} />
              </>
            ) : (
              <p>Please complete the first experience form.</p>
            )}
          </div>
          <div className="p-4">
            {secondExperienceData ? (
              <ExperienceSubmission data={secondExperienceData} />
            ) : (
              <p></p>
            )}
          </div>
          <div className="p-4">
            {thirdExperienceData ? (
              <ExperienceSubmission data={thirdExperienceData} />
            ) : (
              <p></p>
            )}
          </div>
          <div className="p-4">
            {fourthExperienceData ? (
              <ExperienceSubmission data={fourthExperienceData} />
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
