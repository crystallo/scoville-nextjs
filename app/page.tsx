
import { Brands } from '@/components/home/Brands';
import { Hero } from '@/components/home/Hero';
import { NavBar } from '@/components/nav/NavBar';


export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Brands />
      </main>
    </>
  )
}
