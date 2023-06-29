import styles from '@/styles/home/OverviewCard.module.css';

interface OverviewCardProps {
    service: Service;
}

export const OverviewCard = ({ service } : OverviewCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.bar}></div>
            <img className={styles.logo} src={`/${service.logo}`} alt="Geometric shapes" />
            <div className={styles.textbox}>
                <h1 className={styles.type}>{service.type}</h1>
                <h2 className={styles.title}>{service.title}</h2>
                <p className={styles.description}>{service.description}</p>
            </div>
        </div>
    )
}