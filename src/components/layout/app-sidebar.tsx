"use client"

import * as React from "react"
import { useState } from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@/components/ui/sidebar"
import { RowsIcon } from "@phosphor-icons/react"
import { ComboboxSort } from "./comboBox"
import Ratings from "../ui/ratings"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const [selectedRating, setSelectedRating] = useState(0);


  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <RowsIcon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2 mt-4">
            <SidebarMenuItem>
                <div className="space-y-6">
                 
                   <ComboboxSort />
                 
                  
                    <Ratings
                      rating={selectedRating}
                      onChange={setSelectedRating}
                    />
                  
                </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
