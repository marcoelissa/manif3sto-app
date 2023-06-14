'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItem = ({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) => {
  const pathname = usePathname()
  
  return (
    <Link href={href} className={pathname === href ? 'font-bold' : ''}>
      {children}
    </Link>
  )
}

const Nav = () => {
  return (
    <nav className="mb-12 flex items-center justify-center gap-4 text-xl">
      <NavItem href="/">Manifesto</NavItem>
      <div className="text-neutral-700">|</div>
      <NavItem href="/signs">Signs</NavItem>
    </nav>
  )
}

export default Nav
