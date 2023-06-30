import styles from '@/styles/home/OverviewCard.module.css';

interface OverviewCardProps {
    service: Service;
    key: string;
}

export const OverviewCard = ({ service, key } : OverviewCardProps) => {
    return (
        <div className={styles.container} key={key}>
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