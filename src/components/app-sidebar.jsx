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
}) {

  return (
    <Sidebar>
      <SidebarHeader>{/* Sidebar header content */}</SidebarHeader>
      <SidebarContent className="gap-0">
        {/* Personal Details */}
        <Collapsible title="Personal Details" className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Personal Details{" "}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
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
                Education{" "}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
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
                Experience{" "}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <ExperienceForm 
                  onSubmitFirstExperience={onFirstExperienceSubmit} 
                  onSubmitSecondExperience={onSecondExperienceSubmit} 
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
