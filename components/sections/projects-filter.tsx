'use client';

import { Field } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { SearchIcon } from 'lucide-react';
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList, ComboboxValue, useComboboxAnchor } from '@/components/ui/combobox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ALL_TECHNOLOGIES } from '@/constants/technologies';
import Search from '../features/search';

const TECH_FILTERS = ALL_TECHNOLOGIES.map(tech => tech.name);
const SORT_OPTIONS = [
  { value: 'A → Z', label: 'A → Z' },
  { value: 'Most recent', label: 'Most recent' },
  { value: 'Most starred', label: 'Most starred' },
];

interface ProjectsFilterProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedTechs: string[];
  onTechsChange: (val: string[]) => void;
  sortBy: string;
  onSortChange: (val: string) => void;
}

export default function ProjectsFilter({
  searchQuery, onSearchChange,
  selectedTechs, onTechsChange,
  sortBy, onSortChange
}: ProjectsFilterProps) {
  const anchor = useComboboxAnchor();

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {/* Search */}
      <Search  
        placeholder="Search Projects..."
        value={searchQuery}
        onSearchChange={onSearchChange}
        className="pl-10"
      />

      {/* Filters Row */}
      <div className="flex flex-wrap gap-4">
        {/* Tech Combobox */}
        <Combobox
          multiple
          autoHighlight
          items={TECH_FILTERS}
          value={selectedTechs}
          onValueChange={onTechsChange}
        >
          <ComboboxChips ref={anchor} className="w-full max-w-xs">
            <ComboboxValue>
              {(values) => (
                <>
                  {values.map((val:any) => (
                    <ComboboxChip key={val}>{val}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput
                    placeholder={values.length === 0 ? 'Technologies...' : undefined}
                  />
                </>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No technologies found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>{item}</ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>

        {/* Sort Select */}
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent align="start">
            {SORT_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}