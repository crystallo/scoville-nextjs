import { Brands } from '@/components/home/Brands';
import { ConsultingService } from '@/components/home/ConsultingService';
import { Core } from '@/components/home/Core';
import { Footer } from '@/components/home/Footer';
import { Hero } from '@/components/home/Hero';
import { Overview } from '@/components/home/Overview';
import { ProductService } from '@/components/home/ProductService';
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
        <ProductService />
      </main>
      <Footer />
    </>
  )
}
