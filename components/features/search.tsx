import { SearchIcon } from "lucide-react";
import { Field } from "../ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";

interface SearchProps {
  placeholder: string;
  onSearchChange: (val: string) => void;
  value: string,
  className?: string
}

export default function Search({placeholder,value,onSearchChange,className}: SearchProps) {
    return(
        <Field>
            <InputGroup>
                <InputGroupInput
                    placeholder= {placeholder}
                    value= {value}
                    onChange= {(e) => onSearchChange(e.target.value)}
                    className= {className}
                />
                <InputGroupAddon>
                    <SearchIcon className="h-4 w-4 text-muted-foreground" />
                </InputGroupAddon>
            </InputGroup>
        </Field>
    )
}