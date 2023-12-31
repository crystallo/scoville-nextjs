import { brandCards } from "@/data/brandCards";
import { BrandCard } from "./BrandCard";
import styles from '@/styles/home/Brands.module.css';

export const Brands = () => {
    return (
        <section className={styles.container} data-test="brands-section">
            { brandCards.map((brand, idx) => (
                <BrandCard brand={brand} idx={idx} key={brand.name} />
            )) }
        </section>
    );
}