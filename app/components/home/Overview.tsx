import styles from '@/styles/home/Overview.module.css';

import { overviewCards } from "@/data/overviewCards"
import { OverviewCard } from "./OverviewCard"

export const Overview = () => {
    return (
        <section className={styles.container} data-test="overview-section">
            <div className={styles.title_decor}/>
            <h1 className={styles.title}>Overview</h1>
            <h2 className={styles.subtitle}>Your digital solution partner of choice</h2>
            <img className={styles.logo} src="/service-header-logo.svg" alt="Cone geometric shape denoting 3 areas of services" />
            <div className={styles.cards}>
                { overviewCards.map( (service) => (
                    <OverviewCard service={service} key={service.title} />
                )) }
            </div>
        </section>
    )
}