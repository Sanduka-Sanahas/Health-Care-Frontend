

export default function Cart(props){




    return(
        <div>



            <div className="dt-card">
                <img src={props.img} alt={props.name} className="dt-card-img" />

                <p className="dt-card-name">{props.name}</p>
                <p className="dt-card-title">{props.title}</p>
                <p className="dt-card-stars">{props.stars} <span className="dt-card-reviews">({props.reviews}+ Reviews)</span></p>
            </div>
        </div>
    )
}