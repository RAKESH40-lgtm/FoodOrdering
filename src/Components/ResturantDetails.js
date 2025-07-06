import ShimmerUi from "./ShimmerUi"
import { useParams } from "react-router"
import useResturantMenu from "../utils/Hooks/useResturantMenu"

const ResturantDetails = () => {
    const {resId}=useParams()
    const resturantData=useResturantMenu(resId)
    if(resturantData === null) return <ShimmerUi/>
    const {text}=resturantData?.data?.cards[0]?.card?.card
    const {itemCards}=resturantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    return (
        <div>
            <h1>{text}</h1>
            <ul>
                {
                    itemCards?.map((item,index)=><li key={item.card.info.id}>{item.card.info.name}</li>)
                }
            </ul>
        </div>
    )
}
export default ResturantDetails