'use client';
import styles from '@/styles/home/BrandCard.module.css';

interface BrandCardProps {
    brand: Brand;
    idx: number;
    key: string;
};

export const BrandCard = ({ brand, idx, key } : BrandCardProps) => {
    const getContainerClassName = (idx: number) => {
        return idx % 2 ? `${styles.container} ${styles.rotate} ${styles["rotate-left"]}` :
        `${styles.container} ${styles.rotate} ${styles["rotate-right"]}`;
    };

    return (
        <div className={`${getContainerClassName(idx)}`} key={key}>
            <div className={`bar ${styles.bar}`}></div>
            <h1 className={styles.title}>{brand.name}</h1>

            <style jsx>{`
                .bar {
                    background: linear-gradient(135deg, ${brand.start}, ${brand.end});
                }
            `}</style>
        </div>
    );
}