import { useEffect, useState } from "react"
import { RESTO_URL } from "../constant"
const useResturantMenu = (resId) => {

    const [resturantData, setResturantData] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const apiCall = await fetch(RESTO_URL + resId)
        console.log(apiCall)
        // const convertJson = await apiCall.json()
        // setResturantData(convertJson)
    }
    return resturantData
}
export default useResturantMenu