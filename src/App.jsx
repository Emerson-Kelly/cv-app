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
import DeleteButton from "@/components/deleteData";
import { jsPDF } from "jspdf";

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

  const handleClearData = () => {
    setPersonalDetailsFormData(null);
    setEducationData(null);
    setFirstExperienceData(null);
    setSecondExperienceData(null);
    setThirdExperienceData(null);
    setFourthExperienceData(null);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
  
    // Add header
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Resume", 105, 15, { align: "center" });
    doc.setDrawColor(0, 0, 0);
    doc.line(10, 20, 200, 20); // Add a horizontal line
    let yPosition = 30;
  
    const pageHeight = 280; // Define page height for A4 size
    const addSectionTitle = (title) => {
      if (yPosition + 8 > pageHeight) {
        doc.addPage();
        yPosition = 10;
      }
      doc.setFontSize(16);
      doc.setFont("Helvetica", "bold");
      doc.text(title, 10, yPosition);
      yPosition += 8;
    };
  
    const addField = (label, value) => {
      if (value) {
        if (yPosition + 7 > pageHeight) {
          doc.addPage();
          yPosition = 10;
        }
        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`${label} ${value}`, 10, yPosition);
        yPosition += 7;
      }
    };
  
    // Personal Details Section
    if (personalDetailsData) {
      addSectionTitle("Personal Details:");
      addField("First Name:", personalDetailsData.firstName);
      addField("Last Name:", personalDetailsData.lastName);
      addField("Address:", personalDetailsData.address);
      addField("Email:", personalDetailsData.email);
      yPosition += 5;
    }
  
    // Education Section
    if (educationData) {
      addSectionTitle("Education:");
      addField("School:", educationData.school);
      addField("Location:", educationData.location);
      addField("Degree:", educationData.degree);
      addField("Graduation Date:", educationData.endDate);
      yPosition += 5;
    }
  
    // Work Experience Section
    const addExperience = (title, experience) => {
      if (experience) {
        addSectionTitle(title);
        addField("Company:", experience.companyNameOne || experience.companyNameTwo || experience.companyNameThree || experience.companyNameFour);
        addField("Role:", experience.jobTitleOne || experience.jobTitleTwo || experience.jobTitleThree || experience.jobTitleFour);
        addField("Dates:", `${experience.startDateOne || experience.startDateTwo || experience.startDateThree || experience.startDateFour} - ${experience.endDateOne || experience.endDateTwo || experience.endDateThree || experience.endDateFour}`);
        addField("", (experience.descriptionOne || experience.descriptionTwo || experience.descriptionThree || experience.descriptionFour || "").trim());
        yPosition += 15;
      }
    };
  
    addExperience("Work Experience 1", firstExperienceData);
    addExperience("Work Experience 2", secondExperienceData);
    addExperience("Work Experience 3", thirdExperienceData);
    addExperience("Work Experience 4", fourthExperienceData);
  
    // Save the PDF
    doc.save("Resume.pdf");
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
          <Button variant="link" onClick={handleDownloadPDF}>
            Download
          </Button>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <DeleteButton
          data={{
            personalDetailsData,
            educationData,
            firstExperienceData,
            secondExperienceData,
            thirdExperienceData,
            fourthExperienceData,
          }}
          onClear={handleClearData}
        />
        </header>
        <div className="max-w-[816px] m-auto w-full bg-white h-screen">
          <div className="p-4" id="personal-details-container">
            {personalDetailsData ? (
              <PersonalDetailsSubmission data={personalDetailsData} onClear={handleClearData} />
            ) : (
              <p></p>
            )}
          </div>
          <div className="p-4" id="education-container">
            {educationData ? (
              <EducationSubmission data={educationData} />
            ) : (
              <p></p>
            )}
          </div>
          <div className="p-4" id="first-experience-container">
            {firstExperienceData ? (
              <>
                <h3 className="mb-2 text-xl font-semibold">
                  Employment Experience:
                </h3>
                <hr className="mb-2" />

                <ExperienceSubmission data={firstExperienceData} />
              </>
            ) : (
              <p></p>
            )}
          </div>
          <div className="p-4" id="second-experience-container">
            {secondExperienceData ? (
              <ExperienceSubmission data={secondExperienceData} />
            ) : (
              <p></p>
            )}
          </div>
          <div className="p-4" id="third-experience-container">
            {thirdExperienceData ? (
              <ExperienceSubmission data={thirdExperienceData} />
            ) : (
              <p></p>
            )}
          </div>
          <div className="p-4" id="fourth-experience-container">
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
