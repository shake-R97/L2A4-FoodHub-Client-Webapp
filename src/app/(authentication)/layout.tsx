import AuthNavbar from '@/components/layout/authNavbar';
import React from 'react'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <AuthNavbar/>
        {children}
    </div>
  )
}
