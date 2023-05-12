import Link from "next/link"
import type { NavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 lg:gap-10">
      <Link href="/" className="hidden items-center space-x-2 lg:flex">
        <Icons.logo className="h-8 w-8" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 lg:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-muted-foreground hover:text-foreground/80 sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="-ml-4 text-base hover:bg-transparent focus:ring-0 lg:hidden"
          >
            <Icons.logo className="mr-2 h-4 w-4" />
            <span className="font-bold">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={24}
          className="max-h-[calc(100vh-10rem)] w-60 overflow-y-auto"
        >
          <DropdownMenuLabel>
            <Link href="/" className="flex items-center">
              <Icons.logo className="mr-2 h-4 w-4" /> {siteConfig.name}
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {items?.length
            ? items?.map((item, index) =>
                item.href ? (
                  <DropdownMenuItem
                    key={index}
                    asChild
                    className="flex items-center gap-2.5"
                  >
                    <Link href={item.href}>
                      {item.icon && (
                        <item.icon className="h-4 w-4" aria-hidden="true" />
                      )}
                      <span className="line-clamp-1">{item.title}</span>
                    </Link>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem
                    key={index}
                    className="flex items-center gap-2.5"
                  >
                    {item.icon && (
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    )}
                    {item.title}
                  </DropdownMenuItem>
                )
              )
            : null}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
