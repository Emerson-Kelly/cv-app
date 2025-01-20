import React from "react";
import { useForm } from "react-hook-form";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "./ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";


export default function ExperienceForm({ onSubmitFirstExperience, onSubmitSecondExperience, onSubmitThirdExperience, onSubmitFourthExperience }) {
  const { register: registerFirst, handleSubmit: handleSubmitFirst } = useForm();
  const { register: registerSecond, handleSubmit: handleSubmitSecond } = useForm();
  const { register: registerThird, handleSubmit: handleSubmitThird } = useForm();
    const { register: registerFourth, handleSubmit: handleSubmitFourth } = useForm();

  return (
    <>
      {/* First Experience Form */}
      <Collapsible title="firstExperience" className="group/collapsible" defaultOpen>
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
            1st Experience{" "}
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <form
                onSubmit={handleSubmitFirst(onSubmitFirstExperience)}
                className="p-4 space-y-4 bg-gray-50 border rounded-md"
              >
                <div>
                  <label htmlFor="companyNameOne" className="block text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    id="companyNameOne"
                    {...registerFirst("companyNameOne")}
                    type="text"
                    placeholder="Company Name"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitleOne" className="block text-sm font-medium">
                    Job Title
                  </label>
                  <input
                    id="jobTitleOne"
                    {...registerFirst("jobTitleOne")}
                    type="text"
                    placeholder="Job Title"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="startDateOne" className="block text-sm font-medium">
                    Start Date
                  </label>
                  <input
                    id="experienceStartDateOne"
                    {...registerFirst("startDateOne")}
                    type="text"
                    placeholder="Start Date"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="endDateOne" className="block text-sm font-medium">
                    End Date
                  </label>
                  <input
                    id="experienceEndDateOne"
                    {...registerFirst("endDateOne")}
                    type="text"
                    placeholder="End Date"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="descriptionOne" className="block text-sm font-medium">
                    Description
                  </label>
                  <input
                    id="descriptionOne"
                    {...registerFirst("descriptionOne")}
                    type="text"
                    placeholder="Description"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                <Button
                    type="submit"
                    className="w-full"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>

      {/* Second Experience Form */}
      <Collapsible title="secondExperience" className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              2nd Experience{" "}
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <form
                onSubmit={handleSubmitSecond(onSubmitSecondExperience)}
                className="p-4 space-y-4 bg-gray-50 border rounded-md"
              >
                <div>
                  <label htmlFor="companyNameTwo" className="block text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    id="companyNameTwo"
                    {...registerSecond("companyNameTwo")}
                    type="text"
                    placeholder="Company Name"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitleTwo" className="block text-sm font-medium">
                    Job Title
                  </label>
                  <input
                    id="jobTitleTwo"
                    {...registerSecond("jobTitleTwo")}
                    type="text"
                    placeholder="Job Title"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="startDateTwo" className="block text-sm font-medium">
                    Start Date
                  </label>
                  <input
                    id="experienceStartDateTwo"
                    {...registerSecond("startDateTwo")}
                    type="text"
                    placeholder="Start Date"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="endDateTwo" className="block text-sm font-medium">
                    End Date
                  </label>
                  <input
                    id="experienceEndDateTwo"
                    {...registerSecond("endDateTwo")}
                    type="text"
                    placeholder="End Date"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="descriptionTwo" className="block text-sm font-medium">
                    Description
                  </label>
                  <input
                    id="descriptionTwo"
                    {...registerSecond("descriptionTwo")}
                    type="text"
                    placeholder="Description"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>

       {/* Third Experience Form */}
       <Collapsible title="thirdExperience" className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              3rd Experience{" "}
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <form
                onSubmit={handleSubmitThird(onSubmitThirdExperience)}
                className="p-4 space-y-4 bg-gray-50 border rounded-md"
              >
                <div>
                  <label htmlFor="companyNameThree" className="block text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    id="companyNameThree"
                    {...registerThird("companyNameThree")}
                    type="text"
                    placeholder="Company Name"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitleThree" className="block text-sm font-medium">
                    Job Title
                  </label>
                  <input
                    id="jobTitleThree"
                    {...registerThird("jobTitleThree")}
                    type="text"
                    placeholder="Job Title"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="startDateThree" className="block text-sm font-medium">
                    Start Date
                  </label>
                  <input
                    id="experienceStartDateThree"
                    {...registerThird("startDateThree")}
                    type="text"
                    placeholder="Start Date"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="endDateThree" className="block text-sm font-medium">
                    End Date
                  </label>
                  <input
                    id="experienceEndDateThree"
                    {...registerThird("endDateThree")}
                    type="text"
                    placeholder="End Date"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="descriptionThree" className="block text-sm font-medium">
                    Description
                  </label>
                  <input
                    id="descriptionThree"
                    {...registerThird("descriptionThree")}
                    type="text"
                    placeholder="Description"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                <Button
                    type="submit"
                    className="w-full"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>

      {/* Fourth Experience Form */}
      <Collapsible title="fourthExperience" className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              4th Experience{" "}
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <form
                onSubmit={handleSubmitFourth(onSubmitFourthExperience)}
                className="p-4 space-y-4 bg-gray-50 border rounded-md"
              >
                <div>
                  <label htmlFor="companyNameFour" className="block text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    id="companyNameFour"
                    {...registerFourth("companyNameFour")}
                    type="text"
                    placeholder="Company Name"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitleFour" className="block text-sm font-medium">
                    Job Title
                  </label>
                  <input
                    id="jobTitleFour"
                    {...registerFourth("jobTitleFour")}
                    type="text"
                    placeholder="Job Title"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="startDateFour" className="block text-sm font-medium">
                    Start Date
                  </label>
                  <input
                    id="experienceStartDateFour"
                    {...registerFourth("startDateFour")}
                    type="text"
                    placeholder="Start Date"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="endDateFour" className="block text-sm font-medium">
                    End Date
                  </label>
                  <input
                    id="experienceEndDateFour"
                    {...registerFourth("endDateFour")}
                    type="text"
                    placeholder="End Date"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="descriptionFour" className="block text-sm font-medium">
                    Description
                  </label>
                  <input
                    id="descriptionFour"
                    {...registerFourth("descriptionFour")}
                    type="text"
                    placeholder="Description"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                <Button
                    type="submit"
                    className="w-full"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </>
  );
}

export function ExperienceSubmission({ data }) {
    return (
    <div className="p-4 border rounded-md bg-white">
      <h2 className="text-xl font-semibold">Experience</h2>
      <p><strong>Company Name:</strong> {data.companyNameOne || data.companyNameTwo || data.companyNameThree || data.companyNameFour}</p>
      <p><strong>Job Title:</strong> {data.jobTitleOne || data.jobTitleTwo || data.jobTitleThree || data.jobTitleFour}</p>
      <p><strong>Start Date:</strong> {data.startDateOne || data.startDateTwo || data.startDateThree || data.startDateFour}</p>
      <p><strong>End Date:</strong> {data.endDateOne || data.endDateTwo || data.endDateThree || data.endDateFour}</p>
      <p><strong>Description:</strong> {data.descriptionOne || data.descriptionTwo || data.descriptionThree || data.descriptionFour}</p>
    </div>
  );
}
