'use client'

import { ProjectForm } from "@/app/admin/projects/new/page";
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxValue, useComboboxAnchor } from "@/components/ui/combobox";
import { Field, FieldLabel } from "@/components/ui/field";
import React from "react";
import { Controller, Control } from "react-hook-form";

export default function MyCombobox({ 
    frameworks, 
    placeholder, 
    label, 
    error, 
    control
}: { 
    frameworks: string[], 
    placeholder: string, 
    label?: string, 
    error?: string, 
    control: Control<ProjectForm>
}) {
    const anchor = useComboboxAnchor();
    
    return (
        <Field>
            {label && <FieldLabel htmlFor="technologies">{label}</FieldLabel>}
            
            <Controller
                name="technologies"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                    <Combobox 
                        multiple
                        autoHighlight
                        items={frameworks}
                        value={field.value}
                        onValueChange={field.onChange}
                    >
                        <ComboboxChips ref={anchor} className="w-full max-w-xs">
                            <ComboboxValue>
                                {(values) => (
                                    <React.Fragment>
                                        {values.map((value: string) => (
                                            <ComboboxChip key={value}>{value}</ComboboxChip>
                                        ))}
                                        <ComboboxChipsInput 
                                            id="technologies" 
                                            placeholder={values.length === 0 ? placeholder : undefined} 
                                        />
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
                )}
            />
            
            {error && (
                <p className="text-xs text-red-500 mt-1">{error}</p>
            )}
        </Field>
    );
}