'use client'

import { fetcher } from "@/lib/client";
import { Project } from "@/project";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import Link from "next/link";
import { title } from "process";
import { Separator } from "@/components/ui/separator";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxTrigger, ComboboxValue, useComboboxAnchor } from "@/components/ui/combobox";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/layout/projectCard";
import { API_URL } from "@/constants/api-url";
import SkeletonToggle from "@/components/layout/skeletonCard";
import { EmptyDemo } from "@/components/layout/publicEmptyProject";

const socials = [
  {
    value: 'A → Z',
    label: 'A → Z',
  },
  {
    value: 'Most recent',
    label: 'Most recent',
  },
  {
    value: 'Most starred',
    label: 'Most starred',
  },
]

const CustomCard = ({title, description}:{title:string, description:string})=>{
    return(
      <>
        <Card className="flex justify-center items-center">
          <p className="text-2xl lg:text-4xl font-bold text-primary">{title}</p>
          <p className="text-muted-foreground">{description}</p>
        </Card>
      </>
    )
  }


const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
      const getProjects = async () => {
        
        try {
          setLoading(true)
          const response: any = await fetcher("/projects");
      
          const projectsData: Project[] = response?.data || response;

          setProjects(projectsData);

        } catch (err) {
          setError("Failed to fetch projects");
          console.error(err);                    
        } finally {
          setLoading(false);
        }
        // setError("Failed to fetch projects");
      // } finally {
      //   setLoading(false);
      
      }

      getProjects();
      
    }, []);

  const anchor = useComboboxAnchor();

  const [value, setValue] = useState("Most recent")
  const selectedSocial = socials.find((s) => s.value === value)


  return(
    <main className="">
      <div className="min-h-screen flex items-center pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-15 p-6 lg:p-10">
          <div>
            <p className="text-4xl lg:text-6xl font-semibold lg:font-bold">
              Building thoughtful software for the <span className="underline text-secondary"> modern web.</span>
            </p>
            <br />
            <p className="text-muted-foreground">
              I'm Alex — a software engineer focused on building performant, accessible products end-to-end. I work with React, TypeScript, and modern backend systems to take ideas from prototype to production.
            </p>
            <br />
            <div className="">
              <Button className="mr-3 mb-3 p-5 text-md">
                View selected work →
              </Button>
              <Button className="p-5 text-md" variant={'secondary'}>
                Read the blog
              </Button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 mt-15 lg:mt-0">
            <CustomCard title={'50+'} description={'Projects Completed'} />
            <CustomCard title={'100%'} description={'Client Satisfaction'} />
            <CustomCard title={'5+'} description={'Years Experience'}/>
            <CustomCard title={'Global'} description={'Remote Friendly'}/>
          </div>
        </div>
      </div>

      <div id="projects">
        <Separator/>
        <br />
        <div className="px-10 grid lg:grid-cols-2 gap-y-3 gap-x-5">

          {/* Search by typing */}
          <Field className="max-w-lg" >
            <InputGroup>
              <InputGroupInput id="inline-start-input" placeholder="Search..." />
              <InputGroupAddon align="inline-start">
                <SearchIcon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>

          {/* Sort & Filter */}
          <div className="flex gap-x-5">

            {/* Filter by technologies */}
            <Combobox
              multiple
              autoHighlight
              items={frameworks}
            >
              <ComboboxChips ref={anchor} className="w-full max-w-xs">
                <ComboboxValue>
                  {(values) => (
                    <React.Fragment>
                      {values.map((value: string) => (
                        <ComboboxChip key={value}>{value}</ComboboxChip>
                      ))}
                      <ComboboxChipsInput  placeholder={values.length === 0 ? "Select technologies..." : undefined}  />
                      
                    </React.Fragment>
                  )}
                </ComboboxValue>
              </ComboboxChips>
              <ComboboxContent anchor={anchor}>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>

            {/* Sort by published date */}
            <div className="w-full max-w-xs space-y-2">
              <Select value={value} onValueChange={(val) => val && setValue(val)}>
                <SelectTrigger id="Socials" className="w-full">
                  <div className="flex items-center gap-2">
                    <SelectValue />
                  </div>
                </SelectTrigger>

                <SelectContent align="start" className="data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400">
                  {socials.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      <span className="truncate">{item.label}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

        </div>
        <br />
        <Separator/>
        <br />

        <div className="lg:px-10 px-5">
          <p className="font-bold text-4xl">Projects</p>
          <br />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            {/* Loading ... */}
            {
              isLoading && (
                <>
                  <SkeletonToggle/>
                  <SkeletonToggle/>
                  <SkeletonToggle/>
                </>                
              )
            }
            
            {/* Error */}
            {
              error && !isLoading &&
              <p className="col-span-full text-center text-destructive py-10">
                {error}
              </p>
            }

            {
              !error && !isLoading && projects.length === 0 && (
                // <p className="col-span-full text-center text-muted-foreground py-10">
                  <EmptyDemo/>
                // </p>
                )
            }

            {!isLoading && !error && projects.length > 0 && (
              projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
              ))
            )}

          </div>
        </div>
      </div>
    </main>
  )
}