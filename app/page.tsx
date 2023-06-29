import { Brands } from '@/components/home/Brands';
import { ConsultingService } from '@/components/home/ConsultingService';
import { Core } from '@/components/home/Core';
import { Hero } from '@/components/home/Hero';
import { Overview } from '@/components/home/Overview';
import { NavBar } from '@/components/nav/NavBar';


export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Brands />
        <Core />
        <Overview />
        <ConsultingService />
      </main>
    </>
  )
}
