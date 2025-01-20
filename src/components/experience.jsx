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
import { Textarea } from "@/components/ui/textarea";

export default function ExperienceForm({
  onSubmitFirstExperience,
  onSubmitSecondExperience,
  onSubmitThirdExperience,
  onSubmitFourthExperience,
}) {
  const { register: registerFirst, handleSubmit: handleSubmitFirst } =
    useForm();
  const { register: registerSecond, handleSubmit: handleSubmitSecond } =
    useForm();
  const { register: registerThird, handleSubmit: handleSubmitThird } =
    useForm();
  const { register: registerFourth, handleSubmit: handleSubmitFourth } =
    useForm();

  return (
    <>
      {/* First Experience Form */}
      <Collapsible
        title="firstExperience"
        className="group/collapsible"
        defaultOpen
      >
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">
                1st Experience{" "}
              </h4>
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent className="mt-2">
            <SidebarGroupContent>
              <form
                onSubmit={handleSubmitFirst(onSubmitFirstExperience)}
                className="p-4 space-y-4 bg-gray-50 border rounded-md"
              >
                <div>
                  <label
                    htmlFor="companyNameOne"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="jobTitleOne"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="startDateOne"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="endDateOne"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="descriptionOne"
                    className="block text-sm font-medium"
                  >
                    Description
                  </label>
                  <Textarea
                    cols="35"
                    wrap="soft"
                    rows="4"
                    id="descriptionOne"
                    {...registerFirst("descriptionOne")}
                    type="text"
                    placeholder="Enter your description here"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>
                <div className="grid w-full gap-1.5"></div>
                <div>
                  <Button type="submit" className="w-full">
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
              <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">
                2nd Experience{" "}
              </h4>
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent className="mt-2">
            <SidebarGroupContent>
              <form
                onSubmit={handleSubmitSecond(onSubmitSecondExperience)}
                className="p-4 space-y-4 bg-gray-50 border rounded-md"
              >
                <div>
                  <label
                    htmlFor="companyNameTwo"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="jobTitleTwo"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="startDateTwo"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="endDateTwo"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="descriptionTwo"
                    className="block text-sm font-medium"
                  >
                    Description
                  </label>
                  <Textarea
                    cols="35"
                    wrap="soft"
                    rows="4"
                    id="descriptionTwo"
                    {...registerSecond("descriptionTwo")}
                    type="text"
                    placeholder="Enter your description here"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <Button type="submit" className="w-full">
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
              <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">
                3rd Experience{" "}
              </h4>
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent className="mt-2">
            <SidebarGroupContent>
              <form
                onSubmit={handleSubmitThird(onSubmitThirdExperience)}
                className="p-4 space-y-4 bg-gray-50 border rounded-md"
              >
                <div>
                  <label
                    htmlFor="companyNameThree"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="jobTitleThree"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="startDateThree"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="endDateThree"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="descriptionThree"
                    className="block text-sm font-medium"
                  >
                    Description
                  </label>
                  <Textarea
                    cols="35"
                    wrap="soft"
                    rows="4"
                    id="descriptionThree"
                    {...registerThird("descriptionThree")}
                    type="text"
                    placeholder="Enter your description here"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <Button type="submit" className="w-full">
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
              <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">
                4th Experience{" "}
              </h4>
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent className="mt-2">
            <SidebarGroupContent>
              <form
                onSubmit={handleSubmitFourth(onSubmitFourthExperience)}
                className="p-4 space-y-4 bg-gray-50 border rounded-md"
              >
                <div>
                  <label
                    htmlFor="companyNameFour"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="jobTitleFour"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="startDateFour"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="endDateFour"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="descriptionFour"
                    className="block text-sm font-medium"
                  >
                    Description
                  </label>
                  <Textarea
                    cols="35"
                    wrap="soft"
                    rows="4"
                    id="descriptionFour"
                    {...registerFourth("descriptionFour")}
                    type="text"
                    placeholder="Enter your description here"
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <Button type="submit" className="w-full">
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
  // Helper function to format text with line breaks
  const formatWithLineBreaks = (text) => {
    return text
      ? text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))
      : null;
  };

  return (
    <div>
      <p>
        <strong>
          {data.companyNameOne ||
            data.companyNameTwo ||
            data.companyNameThree ||
            data.companyNameFour}
        </strong>
      </p>
      <p className="float-right">
        {data.startDateOne ||
          data.startDateTwo ||
          data.startDateThree ||
          data.startDateFour}{" "}
        -{" "}
        {data.endDateOne ||
          data.endDateTwo ||
          data.endDateThree ||
          data.endDateFour}
      </p>
      <p>
        {data.jobTitleOne ||
          data.jobTitleTwo ||
          data.jobTitleThree ||
          data.jobTitleFour}
      </p>

      <p className="mt-2">
        {formatWithLineBreaks(
          data.descriptionOne ||
            data.descriptionTwo ||
            data.descriptionThree ||
            data.descriptionFour
        )}
      </p>
    </div>
  );
}
