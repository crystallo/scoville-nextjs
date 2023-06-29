import styles from '@/styles/home/ConsultingService.module.css';

export const ConsultingService = () => {
    return (
        <section className={styles.container}>
            <div className={styles.title_decor}/>
            <h1 className={styles.title}>Consulting Service</h1>
            <h2 className={styles.subtitle}>Solving your most challenging business problems</h2>
            <div className={styles.cards}>
                <div className={`${styles.largecard} ${styles.card}`}>
                    <img src="/large-card.webp" alt="Slideshow of different industries" />
                    <h1 className={styles.largecardtitle}>Digital Consulting Service</h1>
                </div>

                <div className={styles.smallcards}>
                    <div className={`${styles.smallcard} ${styles.card}`}>
                        <img src="/small-card-0.webp" alt="Slideshow of different industries" />
                        <h1 >By Industries</h1>
                    </div>
                    <div className={`${styles.smallcard} ${styles.card}`}>
                        <img src="/small-card-1.webp" alt="Slideshow of different industries" />
                        <h1>By Technologies</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}