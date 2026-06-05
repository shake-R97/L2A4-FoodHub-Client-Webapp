// components/layout/RestaurantChip.tsx
import Image from "next/image"
import Link from "next/link"
import { MapPin, ChevronRight } from "lucide-react"

interface RestaurantChipProps {
  name: string
  city: string
  logoUrl: string
  url: string
}

export function RestaurantChip({ name, city, logoUrl, url }: RestaurantChipProps) {
  return (
    <Link
      href={url}
      className="
        group flex items-center gap-3 mt-4
        px-3 py-2.5 rounded-xl w-full
        border border-[#3aad65]/20
        bg-[#3aad65]/5
        hover:bg-[#3aad65]/10 hover:border-[#3aad65]/40
        active:scale-[0.98]
        transition-all duration-200 ease-out
        cursor-pointer
      "
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#3aad65]/30 group-hover:ring-[#3aad65]/60 transition-all duration-200">
          {/* <Image
            src={avatarUrl}
            alt={name}
            width={36}
            height={36}
            className="w-full h-full object-cover"
          /> */}
        </div>
        {/* online dot */}
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#3aad65] rounded-full ring-2 ring-white dark:ring-zinc-900" />
      </div>

      {/* Info */}
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-[13px] font-semibold text-foreground truncate leading-tight">
          {name}
        </span>
        <span className="flex items-center gap-0.5 text-[11px] text-muted-foreground mt-0.5">
          <MapPin className="w-2.5 h-2.5 shrink-0" />
          {city}
        </span>
      </div>

      {/* CTA badge */}
      <div className="
        shrink-0 flex items-center gap-0.5
        text-[11px] font-medium text-[#3aad65]
        bg-[#3aad65]/10 group-hover:bg-[#3aad65]/20
        px-2 py-1 rounded-full
        transition-colors duration-200
      ">
        Visit
        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
      </div>
    </Link>
  )
}