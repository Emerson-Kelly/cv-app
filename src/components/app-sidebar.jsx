import * as React from "react";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import PersonalDetailsForm from "./personal-details-submission";
import EducationForm from "./education";

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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
export const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Personal Details",
      url: "#",
      items: [
        {
          title: "Form",
          render: <PersonalDetailsForm key="personal-details-form" />,
        },
      ],
    },
    {
      title: "Education",
      url: "#",
      items: [
        {
          title: "Form",
          render: <EducationForm key="education-form" />,
        },
      ],
    },
    {
      title: "Experience",
      url: "#",
      items: [
        {
          title: "Form",
          url: "#",
        },
        {
          title: "New Form",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ onPersonalDetailsSubmit, onEducationSubmit }) {
  return (
    <Sidebar>
      <SidebarHeader>{/* Sidebar header content */}</SidebarHeader>
      <SidebarContent className="gap-0">
        <Collapsible
          title="Personal Details"
          defaultOpen
          className="group/collapsible"
        >
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

        <Collapsible
          title="Education"
          defaultOpen
          className="group/collapsible"
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
              Education {""}
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

      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
