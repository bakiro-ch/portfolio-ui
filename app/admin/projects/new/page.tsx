'use client'

import MyCombobox from "@/components/features/my-combobox";
import ProjectImage from "@/components/project-image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SpinnerCustom } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { ALL_TECHNOLOGIES } from "@/constants/technologies";
import { fetcher } from "@/lib/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import zod from "zod";

const frameworks = ALL_TECHNOLOGIES.map(tech=>tech.name)

const projectSchema = zod.object({
    title: zod.string()
    .min(3, "Project title must be at least 3 characters")
    .max(100, "Project title must be less then 100 characters"),

    description: zod.string()
    .max(2000, "Project description must be less than 2000 characters").optional().or(zod.literal("")),

    status: zod.enum(["draft", "published"]),

    isFeatured: zod.boolean(),

    image: zod.file("Please upload a valid project image").mime(["image/jpeg", "image/png", "image/svg+xml", "image/webp"]).optional(),

    demoLink: zod.url("Please enter a valid demo URL (e.g., https://...)"),

    githubLink: zod.url("Please enter a valid GitHub URL").optional().or(zod.literal("")),

    technologies: zod.array(
    zod.enum(frameworks as [string, ...string[]])
    ).min(1, "Project must have at least 1 technologie").max(20, "Project must have at most 20 technologies")
})

export type ProjectForm = zod.infer<typeof projectSchema>;

export default function NewProject () {

    const {register ,handleSubmit, control, formState: { errors, isSubmitting }} = useForm<ProjectForm>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            status: "published",
            isFeatured: false,   
        },
        mode: 'onBlur'
    });

    const onSubmit = async (data: ProjectForm) => {
        try{

            console.log('data=> ', data);
            const projectPayload = {
                title: data.title,
                description: data.description || "",
                status: data.status,
                isFeatured: data.isFeatured,
                demoLink: data.demoLink,
                githubLink: data.githubLink || undefined,
                technologies: data.technologies,
            };

            const projectResponse = await fetcher<SuccessProjectResponse>('/admin/projects', {
                body: JSON.stringify(projectPayload),
                method: 'POST'
            });

            const projectId = projectResponse.data.id;
console.log(projectResponse)
            if(data.image) {

                const formData = new FormData();

                formData.append('image', data.image);

                const imageResponse = await fetcher(`/admin/projects/${projectId}/image`,
                    {
                        body: formData,
                        method: 'POST'
                    }
                );
                console.log(imageResponse)
            }

            

        }catch (error: any){
            console.log('error: ', error);
        }
    }

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

            <form action='#' onSubmit={handleSubmit(onSubmit)}>
                <Card className="p-5">
                    <Field>
                        <FieldLabel htmlFor="title" >Project Title *</FieldLabel>
                        <Input {...register('title')} id="title" placeholder="Enter project title" />
                        {errors.title && (
                                <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>
                            )}

                    </Field>
                    <Field>
                        <FieldLabel htmlFor="description">Description</FieldLabel>
                        <Textarea {...register('description')} id="description" placeholder="Describe you project" />
                            {errors.description && (
                                <p className="text-xs text-red-500 mt-1">{errors.description.message}</p>
                            )}

                    </Field>

                    <MyCombobox control={control}  error={errors.technologies?.message} frameworks={frameworks} placeholder="Add project technologies" label="Technologies *" />

                        <Field className="max-w-xs">
                            <FieldLabel htmlFor="status">Status</FieldLabel>
                            <Select {...register('status')} defaultValue="published">
                                <SelectTrigger>
                                    <SelectValue id="status" placeholder="Status"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="published">Published</SelectItem>
                                    <SelectItem value="draft">Draft</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.status && (
                                <p className="text-xs text-red-500 mt-1">{errors.status.message}</p>
                            )}
                        </Field>

                        <Field orientation="horizontal" className="max-w-xs">
                            <FieldLabel htmlFor="featured">Featured project</FieldLabel>
                            <Checkbox {...register('isFeatured')} id="featured" />
                            {errors.isFeatured && (
                                <p className="text-xs text-red-500 mt-1">{errors.isFeatured.message}</p>
                            )}
                            </Field>

                        <ProjectImage control={control} error={errors.image?.message}/>

                        <Field>
                            <FieldLabel htmlFor="demo" >Demo Link *</FieldLabel>
                            <Input {...register('demoLink')} id="demo" placeholder="https://demo.example.com" />
                            {errors.demoLink && (
                                <p className="text-xs text-red-500 mt-1">{errors.demoLink.message}</p>
                            )}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="github">Github Link</FieldLabel>
                            <Input {...register('githubLink')} id="github" placeholder="https://github.com/username/repo" />
                            {errors.githubLink && (
                                <p className="text-xs text-red-500 mt-1">{errors.githubLink.message}</p>
                            )}
                        </Field>
                </Card>

                <div className="mt-5 flex gap-5 justify-end">
                    <Button type="submit" className="">{isSubmitting ? <SpinnerCustom/> : "Add"}</Button>
                    <Button type="reset" variant={'secondary'}>Cancel</Button>
                </div>
            </form>
        </main>
    )
}