'use client'

import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxValue, useComboboxAnchor } from "@/components/ui/combobox";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import React from "react";

export default function MyCombobox({frameworks,placeholder, label, defaultValue}:{frameworks: string[], placeholder:string, label?:string, defaultValue: string[]}) {
    const anchor = useComboboxAnchor()
    return(
        <Field>
            {label && <FieldLabel htmlFor="technologies">{label}</FieldLabel>}
            <Combobox multiple
                        autoHighlight
                        items={frameworks}
                        defaultValue={defaultValue}
                        // defaultValue={[frameworks[0]]}
                >
                <ComboboxChips ref={anchor} className="w-full max-w-xs">
                    <ComboboxValue>
                        {(values) => (
                            <React.Fragment>
                            {values.map((value: string) => (
                                <ComboboxChip key={value}>{value}</ComboboxChip>
                            ))}
                            <ComboboxChipsInput id="technologies" placeholder={values.length === 0 ? placeholder : undefined} />
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
        </Field>

    )
}