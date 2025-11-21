'use client'
import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface SearchInputProps {
    count?: number
}

const SearchInput: React.FC<SearchInputProps> = ({ count }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target?.value;
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <InputGroup className="my-5 max-w-md bg-white">
            <InputGroupInput
                placeholder="Search..."
                onChange={onChangeSearch}
                defaultValue={searchParams.get('search')?.toString()}
            />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            {!!searchParams.get('search')?.toString() && <InputGroupAddon align="inline-end">{count} results</InputGroupAddon>}
        </InputGroup>
    )
}

export default SearchInput
