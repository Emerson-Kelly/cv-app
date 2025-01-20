//import * as React from "react";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import PersonalDetailsForm from "./personal-details-submission";
import EducationForm from "./education";
import ExperienceForm from "./experience";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { v4 as uuidv4 } from "uuid";

export function AppSidebar({
  onPersonalDetailsSubmit,
  onEducationSubmit,
  onFirstExperienceSubmit,
  onSecondExperienceSubmit,
  onThirdExperienceSubmit,
  onFourthExperienceSubmit
}) {

  return (
    <Sidebar>
      <SidebarHeader>
        {/* Sidebar header content */}
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl ml-2 mt-2">CV App{" "}</h1>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* Personal Details */}
        <Collapsible title="Personal Details" className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
              <h5 className="scroll-m-20 text-base font-semibold tracking-tight">Personal Details{" "}</h5>
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="px-2 my-4">
              <SidebarGroupContent>
                <PersonalDetailsForm onSubmit={onPersonalDetailsSubmit} />
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Education */}
        <Collapsible title="Education" className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
              <h5 className="scroll-m-20 text-base font-semibold tracking-tight">Education{" "}</h5>
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="px-2 my-4">
              <SidebarGroupContent>
                <EducationForm onSubmit={onEducationSubmit} />
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Experience */}
        <Collapsible title="Experience" className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
              <h5 className="scroll-m-20 text-base font-semibold tracking-tight">Experience{" "}</h5>
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="px-2 my-4">
              <SidebarGroupContent>
                <ExperienceForm 
                  onSubmitFirstExperience={onFirstExperienceSubmit} 
                  onSubmitSecondExperience={onSecondExperienceSubmit}
                  onSubmitThirdExperience={onThirdExperienceSubmit}
                  onSubmitFourthExperience={onFourthExperienceSubmit}
                />
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
