import { Brands } from '@/app/components/home/Brands';
import { ConsultingService } from '@/app/components/home/ConsultingService';
import { Core } from '@/app/components/home/Core';
import { Hero } from '@/app/components/home/Hero';
import { Overview } from '@/app/components/home/Overview';
import { ProductService } from '@/app/components/home/ProductService';


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Brands />
        <Core />
        <Overview />
        <ConsultingService />
        <ProductService />
      </main>
    </>
  )
}
