

export default function InformationCard(props){


    return(

        <div>
            <div className="info-cards">
                <span className="info-card-icon">

                </span>
                <p className="info-card-title">{props.title}</p>
                <p className="info-card-description">{props.description}</p>
            </div>
        </div>
    )
}