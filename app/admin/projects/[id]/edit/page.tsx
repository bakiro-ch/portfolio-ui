import MyCombobox from "@/components/features/my-combobox";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ALL_TECHNOLOGIES } from "@/constants/technologies";
import { fetcher } from "@/lib/client";

const frameworks = ALL_TECHNOLOGIES.map(tech=>tech.name)

async function fetchProjectById(projectId: string) {
    const project = await fetcher<SuccessProjectResponse>(`/projects/${projectId}`);
    return project.data;
}

interface EditProjectProps {
    // Use { slug: string } if your folder is named [slug]
    params: Promise<{ id: string }>; 
}

export default async function EditProject ({ params }: EditProjectProps) {

    const { id } = await params; 
    console.log(`slug: ${id}`);

    const project = await fetchProjectById(id);

    return(
        <main>
            <div>
                <p className="text-3xl font-bold">
                    Edit Project
                </p>
                <p className="text-muted-foreground">
                    Edit your portfolio project
                </p>
            </div>

            <br />

            <Card className="p-5">
                <Field>
                    <FieldLabel htmlFor="title" >Project Title *</FieldLabel>
                    <Input defaultValue={project.title} id="title" placeholder="Enter project title" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="description">Description *</FieldLabel>
                    <Textarea defaultValue={project.description || ''} id="description" placeholder="Describe you project" />
                </Field>

                <MyCombobox defaultValue={project.technologies} frameworks={frameworks} placeholder="Add project technologies" label="Technologies *" />

                    <Field className="max-w-xs">
                        <FieldLabel htmlFor="status">Status</FieldLabel>
                        <Select defaultValue={project.status}>
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
                        <Checkbox defaultChecked={project.isFeatured} id="featured" />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="demo" >Demo Link *</FieldLabel>
                        <Input defaultValue={project.demoLink} type="url" id="demo" placeholder="https://demo.example.com" />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="github">Github Link</FieldLabel>
                        <Input defaultValue={project.githubLink || ''} type="url" id="github" placeholder="https://github.com/username/repo" />
                    </Field>

            </Card>
        </main>
    )
}