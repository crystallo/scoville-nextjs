import styles from '@/styles/home/Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.container} data-test="footer">
            <h1 className={styles.title}>Scoville Co., Ltd</h1>

            <div className={styles.table}>
                <div className={styles.row}>
                    <div className={styles.header}>Founter</div>
                    <div className={styles.data}>Masahiro Detani</div>
                </div>

                <div className={styles.row}>
                    <div className={styles.header}>Founded</div>
                    <div className={styles.data}>2016</div>
                </div>

                <div className={styles.row}>
                    <div className={styles.header}>Employees</div>
                    <div className={styles.data}>170 employees (as of July 2023)</div>
                </div>

                <div className={styles.row}>
                    <div className={styles.header}>Board</div>
                    <div className={styles.data}>
                        CEO: Masahiro Detani <br/>
                        CTO: Kohei Iwasaki<br/>
                        CHRO: Ikuma Kusabuka<br/>
                        CSO: Takahiro Funaoi<br/>
                        Managing Director: Richard Seldon
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.header}>Offices</div>
                    <div className={styles.addresses}>
                        <div className={styles.address}>
                            <div className={styles.addressheader}>Tokyo</div>
                            <div className={styles.addressdata}>Ebisu Square 3F, 1-23-23 Ebisu, Shibuya, Tokyo, 〒150-0013</div>
                        </div>
                        <div className={styles.address}>
                            <div className={styles.addressheader}>Kyoto</div>
                            <div className={styles.addressdata}>583-4 Nakanochou, Shimogyo Ward, Kyoto, 〒600-8032</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <p>Privacy Policy</p>
                <p>© Scoville, 2023</p>
                <p>We Love Digital Experiences</p>
            </div>

            <div className={styles.background}>
                <img src="/footer-bg.svg" alt="Geometric shape as background" />
            </div>
        </footer>
    )
}