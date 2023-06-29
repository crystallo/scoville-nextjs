import { overviewCards } from "@/data/overviewCards"
import { OverviewCard } from "./OverviewCard"

export const Overview = () => {
    return (
        <section>
            <div />
            <h1>Overview</h1>
            <h2>Your digital solution partner of choice</h2>
            <div>
                { overviewCards.map( (service) => (
                    <OverviewCard service={service} />
                )) }
            </div>
        </section>
    )
}