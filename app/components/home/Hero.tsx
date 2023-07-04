import styles from '@/styles/home/Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container} data-test="hero-section">
            <div className={styles.background}>
                <img src="/hero-background.webp" />
            </div>
            <div className={styles.text_box}>
                <p className={styles.head}>Enterprise Digital Solutions</p>
                <p className={styles.title}>Digital Solutions Empowering the Workforce.</p>
                <p className={styles.caption}>We integrate strategy, design and technical development to create desirable products and services that delight our target audiences. <br/>
                <br/>Our dedicated workforce of more than 170 members located around the world are all committed to the shared goal of empowering people through better HR and Technology solutions.</p>
            </div>
        </section>
    )
}