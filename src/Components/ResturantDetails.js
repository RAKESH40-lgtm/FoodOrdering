import { useEffect, useState } from "react"
import ShimmerUi from "./ShimmerUi"
import { RESTO_URL } from "../utils/constant"
import { useParams } from "react-router"

const ResturantDetails = () => {
    const {resId}=useParams()
    const [resturantData, setResturantData] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const apiCall = await fetch(RESTO_URL+resId)
        const convertJson = await apiCall.json()
        setResturantData(convertJson)
    }
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