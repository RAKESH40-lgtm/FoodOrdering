import { useEffect, useState } from "react"
import { MENU_LIST_URL } from "../constant"

const useResturantList = () => {
    const [resturantList, updateResturantList] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const callAPi = await fetch(MENU_LIST_URL)
        const data = await callAPi.json()
        updateResturantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return resturantList
}
export default useResturantList