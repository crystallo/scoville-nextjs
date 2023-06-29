
import { Brands } from '@/components/home/Brands';
import { Core } from '@/components/home/Core';
import { Hero } from '@/components/home/Hero';
import { NavBar } from '@/components/nav/NavBar';


export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Brands />
        <Core />
      </main>
    </>
  )
}
