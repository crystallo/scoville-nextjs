import styles from "@/styles/home/ProductServiceCard.module.css"

interface ProductServiceCardProps {
    product: Product;
    up: boolean;
    key: string;
}

export const ProductServiceCard = ({ product, up, key } : ProductServiceCardProps) => {
    return (
        <div className={`${styles.container} ${up ? styles.moveup : styles.movedown}`} key={key}>
            <div className={styles.header}>
                <div><img className={styles.logo} src="/logo.svg" alt="Scoville logo" /></div>
                <div className={styles.titles}>
                    <h1 className={styles.type}>{product.type}</h1>
                    <h2 className={styles.title}>{product.title}</h2>
                </div>
            </div>
            <div className={styles.content}>
                <img className={styles.productlogo} src={`/service-${product.logo}.webp`} />
                <p className={styles.description}>{product.description}</p>
            </div>
        </div>
    )
}