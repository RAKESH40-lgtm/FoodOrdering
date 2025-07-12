import { useEffect, useState } from "react"
import RestroCard from "./RestroCard"
import ShimmerUi from "./ShimmerUi.js"
import { Link } from "react-router"
import useResturantList from "../utils/Hooks/useResturantList.js"

const Body = () => {
    const listdata = useResturantList()
    const [resturantList, updateResturantList] = useState([])
    const [filterresturantList, setFilterResturantList] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        updateResturantList(listdata)
        setFilterResturantList(listdata)
    }, [listdata])
    if (resturantList.length === 0) {
        return <ShimmerUi />
    }
    return (
        <div className="p-4 m-4">
            <div className="p-2 m-4 flex justify-center">
                <div className="">
                    <input type="text" name="Search" className="p-2 border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {
                        let filterSearch = resturantList.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilterResturantList(filterSearch)
                    }} className="px-4 bg-green-200 m-3 rounded-sm cursor-pointer">Search</button>
                </div>
                <button onClick={() => {
                    const filterResturant = resturantList.filter(item => item.info.avgRating > 4.3)
                    updateResturantList(filterResturant)
                }} className="px-3 bg-gray-200">Top Rated Resturant</button>
            </div>
            <div className="flex flex-wrap">
                {
                    filterresturantList.map((item) => <Link key={item.info.id} to={`/resturant/${item.info.id}`}><RestroCard RestoData={item} /></Link>)
                }
            </div>
        </div>
    )
}
export default Body