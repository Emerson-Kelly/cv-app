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

export default function ExperienceForm({ onSubmitFirstExperience, onSubmitSecondExperience }) {
  const { register: registerFirst, handleSubmit: handleSubmitFirst } = useForm();
  const { register: registerSecond, handleSubmit: handleSubmitSecond } = useForm();

  return (
    <>
      {/* First Experience Form */}
      <Collapsible title="firstExperience" className="group/collapsible">
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
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-md"
                  >
                    Submit
                  </button>
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
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-md"
                  >
                    Submit
                  </button>
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
      <p><strong>Company Name:</strong> {data.companyNameOne || data.companyNameTwo}</p>
      <p><strong>Job Title:</strong> {data.jobTitleOne || data.jobTitleTwo}</p>
      <p><strong>Start Date:</strong> {data.startDateOne || data.startDateTwo}</p>
      <p><strong>End Date:</strong> {data.endDateOne || data.endDateTwo}</p>
      <p><strong>Description:</strong> {data.descriptionOne || data.descriptionTwo}</p>
    </div>
  );
}
