import Navbar, { NavigationSection } from "@/components/layout/navbar";

const navigationData: NavigationSection[] = [
  {
    title: 'Menu',
    href: '/menu'
  },
  {
    title: 'Restaurant',
    href: '/restaurant'
  },

]

export default function CommonLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div>
            <Navbar navigationData={navigationData} />
            {children}
        </div>
    )
}
