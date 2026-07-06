import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PropsWithChildren } from "react";

interface FilterProps{
    statusFilter: string,
    setStatusFilter: (open: string) => void,
    className?: string,
    placeholder?: string
}

export default function Filter({statusFilter, setStatusFilter, placeholder="Filter By", className, children}: PropsWithChildren<FilterProps>) {
    return(
        <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {children}
                </SelectGroup>
            </SelectContent>
        </Select>

    )
}