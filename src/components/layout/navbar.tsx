"use client"
import { MenuIcon } from 'lucide-react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { ModeToggle } from '@/components/layout/modeToggle'

import { cn } from '@/lib/utils'

import Logo from '@/components/layout/logo'

export type NavigationSection = {
  title: string
  href: string
}

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Navbar = ({ navigationData, className }: HeaderProps) => {
  return (
    <header className={cn('bg-background backdrop-blur-md sticky top-0 z-50 h-17.5', className)}>
      <div className='mx-auto flex h-full w-9/10  items-center justify-between gap-6 px-4 py-3 sm:px-4 lg:px-8'>

        {/* Logo */}
        <div>
          <Link href='/'>
            <Logo className='gap-3' />
          </Link>
        </div>

        {/* navigation button */}
        <div className='hidden md:block '>

          {/* Navigation */}
          <NavigationMenu className='hidden md:flex  gap-2'>
            <NavigationMenuList className='flex-wrap justify-start gap-2 lg:gap-3'>

              {/* Toggle button */}
              <div>
                <ModeToggle />
              </div>

              {navigationData.map(navItem => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink asChild>
                    <Link className='text-[17px] font-semibold text-foreground' href={navItem.href}> {navItem.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* singing and toggle button */}
              <Button variant={"outline"} asChild className=' text-base! bg-[#4caf78] text-white dark:bg-transparent dark:border-[#3aad65] btn-black rounded-full px-6 py-4'>
                <Link href='/signup'>SignUp</Link>
              </Button>
              <Button variant={"ghost"} asChild className=' text-base! bg-[#3aad65] dark:bg-[#3aad65] text-white rounded-full  px-6 py-4'>
                <Link href='/login'>LogIn</Link>
              </Button>
            </NavigationMenuList>
          </NavigationMenu>
        </div>





        {/* <div className='hidden md:flex items-center gap-3'>
         
        </div> */}



        {/* Navigation for small screens */}
        <div className='flex gap-2 md:hidden'>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40 mt-1' align='end'>
              {navigationData.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link className='text-[14px] font-medium text-foreground' href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              ))}

               <Button variant={"outline"} asChild className=' text-base! bg-[#4caf78] text-white dark:bg-transparent dark:border-[#3aad65] btn-black rounded-full px-6 py-4 mb-2 ml-1'>
                <Link href='/signup'>SignUp</Link>
              </Button>
              <Button variant={"ghost"} asChild className=' text-base! bg-[#3aad65] dark:bg-[#3aad65] text-white rounded-full  px-6 py-4 mb-1.5 ml-1'>
                <Link href='/login'>LogIn</Link>
              </Button>

            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className='bg-[#73a07363] dark:bg-[#8c9ea3]/15 mx-auto h-[0.3px] w-full bg-gradient-to-r from-transparent  to-transparent
  dark:'></div>
    </header >
  )
}

export default Navbar;