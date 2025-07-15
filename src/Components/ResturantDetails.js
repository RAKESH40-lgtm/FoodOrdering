import ShimmerUi from "./ShimmerUi"
import { useParams } from "react-router"
import useResturantMenu from "../utils/Hooks/useResturantMenu"
import { ITEM_IMAGE_URL } from "../utils/constant"
import ResturantData from "./ResturantData"
import { useState } from "react"

const ResturantDetails = () => {
    const { resId } = useParams()
    const resturantData = useResturantMenu(resId)
    const [showIndex, setShowIndex] = useState(null)
    if (resturantData === null) return <ShimmerUi />
    const showFunction = (index) => {
        console.log(index)
        setShowIndex((prev) => prev === index ? null : index)
    }
    const { text } = resturantData?.data?.cards[0]?.card?.card
    const categories = resturantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (
        <div className="flex justify-center m-8 flex-col items-center">
            <h1 className="text-2xl">{text}</h1>
            {
                categories.map((item, index) =>
                    <ResturantData categories={item.card.card} key={item.card.card.categoryId} showAccordian={index === showIndex ? true : false} showFunction={() => showFunction(index)} />
                )
            }


        </div>
    )
}
export default ResturantDetails