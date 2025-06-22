import { IMAGE_URL } from "../utils/constant"

const RestroCard = (props) => {
    const {name,avgRating,cuisines,sla,cloudinaryImageId}=props.RestoData.info
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={`${IMAGE_URL}${cloudinaryImageId}`}/>
            </div>
            <p className="resturantName">{name}</p>
            <p className="timeandratings">
                <span>{avgRating} stars</span>
                <span>{sla.deliveryTime} mins</span>
            </p>
            <p className="cussins">{cuisines.join(",")}</p>
        </div>
    )
}

export default RestroCard