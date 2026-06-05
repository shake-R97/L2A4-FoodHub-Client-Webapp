"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const SortBy = [
  "Reviews",
  "Delivery Cost",
  "Popular",
  "Trendy",
  "New",
  "Low Price",
] as const

export function ComboboxSort() {
  return (
    <Combobox items={SortBy}>
      <ComboboxInput placeholder="Sort By" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} className={"text-[15px] text-foreground"} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
