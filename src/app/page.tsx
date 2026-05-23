import MainHero from "@/components/heroSection/mainHero";
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

export default function Home() {
  return (
    <header>
      <div className="min-h-screen bg-[#c6e655]">
        <Navbar navigationData={navigationData} />
        <MainHero></MainHero>
      </div>
    </header>
  );
}
