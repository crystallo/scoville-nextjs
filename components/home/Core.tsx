import styles from '@/styles/home/Core.module.css';

export const Core = () => {
    return (
        <section className={styles.container}>
            <div className={styles.background}>
                <img className={styles.background_img} src="/core-background.webp" alt="Geometric shape" />
            </div>
            <div className={styles.text_box}>
                <p className={styles.head}>Our Core Competencies</p>
                <p className={styles.title}>Great Products, Great Marketing, Great Distribution.</p>
                <p className={styles.caption}>
                    Digital Transformation. <br/>
                    HR Transformation. <br/>
                    Empowering Workforces.
                </p>
            </div>
        </section>
    );
}