import { brandCards } from "@/data/brandCards";
import { BrandCard } from "./BrandCard";
import styles from '@/styles/home/Brand.module.css';

export const Brands = () => {
    return (
        <section className={styles.container}>
            { brandCards.map((brand, idx) => (
                <BrandCard brand={brand} idx={idx} key={brand.name} />
            )) }
        </section>
    );
}