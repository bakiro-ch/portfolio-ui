// 'use client'

import MyCombobox from "@/components/features/my-combobox";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxValue, useComboboxAnchor } from "@/components/ui/combobox";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
];


export default function NewProject () {
    // const anchor = useComboboxAnchor()
    return(
        <main>
            <div>
                <p className="text-3xl font-bold">
                    Create New Project
                </p>
                <p className="text-muted-foreground">
                    Add a new project to your portfolio
                </p>
            </div>

            <br />

            <Card className="p-5">
                <Field>
                    <FieldLabel htmlFor="title" >Project Title *</FieldLabel>
                    <Input id="title" placeholder="Enter project title" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="description">Description *</FieldLabel>
                    <Textarea id="description" placeholder="Describe you project" />
                </Field>

                <MyCombobox frameworks={frameworks} placeholder="Add project technologies" label="Technologies *" />

                    <Field className="max-w-xs">
                        <FieldLabel htmlFor="status">Status</FieldLabel>
                        <Select defaultValue="published">
                            <SelectTrigger>
                                <SelectValue id="status" placeholder="Status"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="published">Published</SelectItem>
                                <SelectItem value="draft">Draft</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>

                    <Field orientation="horizontal" className="max-w-xs">
                        <FieldLabel htmlFor="featured">Featured project</FieldLabel>
                        <Checkbox id="featured" />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="demo" >Demo Link *</FieldLabel>
                        <Input type="url" id="demo" placeholder="https://demo.example.com" />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="github">Github Link</FieldLabel>
                        <Input type="url" id="github" placeholder="https://github.com/username/repo" />
                    </Field>

            </Card>
        </main>
    )
}