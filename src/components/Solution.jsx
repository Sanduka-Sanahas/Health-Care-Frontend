


export default function Solution(props){


    return(

        <div>


            <div className="about-text-step">

                <p className="about-text-sTitle">

                    <span>{props.title}</span>
                </p>
            </div>

            <div className="about-text-description">{props.description}</div>
        </div>
    )
}