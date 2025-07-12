import ShimmerUi from "./ShimmerUi"
import { useParams } from "react-router"
import useResturantMenu from "../utils/Hooks/useResturantMenu"
import { ITEM_IMAGE_URL } from "../utils/constant"

const ResturantDetails = () => {
    const {resId}=useParams()
    const resturantData=useResturantMenu(resId)
    if(resturantData === null) return <ShimmerUi/>
    const {text}=resturantData?.data?.cards[0]?.card?.card
    const {itemCards}=resturantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards)
    return (
        <div className="flex justify-center m-8 flex-col items-center">
            <h1 className="text-2xl">{text}</h1>
            <ul className="m-3">
                {
                    itemCards?.map((item)=><li key={item.card.info.id} className="bg-gray-100 m-4 p-5">
                    <img className="w-15 p-3" src={`${ITEM_IMAGE_URL}${item.card.info.imageId}`}/>
                    <p className="flex justify-between items-center ">{item.card.info.name}   <span>- {`₹ ${item.card.info.price/100 || item.card.info.defaultPrice/100} `} </span> </p>
                    </li>)
                }
            </ul>
        </div>
    )
}
export default ResturantDetails