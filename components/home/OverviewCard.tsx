interface OverviewCardProps {
    service: Service;
}

export const OverviewCard = ({ service } : OverviewCardProps) => {
    return (
        <div>
            <div />
            <img src={`/${service.logo}`} alt="Geometric shapes" />
            <div>
                <p>{service.type}</p>
                <p>{service.title}</p>
                <p>{service.description}</p>
            </div>
        </div>
    )
}