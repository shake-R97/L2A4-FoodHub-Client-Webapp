"use client"

import Link from 'next/link'

import { ModeToggle } from '@/components/layout/modeToggle'

import { cn } from '@/lib/utils'

import Logo from '@/components/layout/logo'


interface NavbarProps {
  className?: string
}

const AuthNavbar = ({ className }: NavbarProps) => {
  return (
    <header className={cn('bg-transparent backdrop-blur-xl sticky top-0 z-50 h-17.5  shadow-black/20 transition-all duration-300', className)}>
      <div className='mx-auto flex h-full w-9/10  items-center justify-between gap-6 px-4 py-3 sm:px-4 lg:px-8'>

        {/* Logo */}
        <div>
          <Link href='/'>
            <Logo className='gap-3' />
          </Link>
        </div>

        {/* mode Toggle */}
        <div>
          <ModeToggle/>
        </div>

       </div>

      <div className='bg-[#73a07363] dark:bg-[#8c9ea3]/15 mx-auto h-[0.3px] w-full bg-gradient-to-r from-transparent  to-transparent
  dark:'></div>
    </header >
  )
}

export default AuthNavbar;