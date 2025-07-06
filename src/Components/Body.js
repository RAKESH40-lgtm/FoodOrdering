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
        <div className="body-container">
            <div className="filter-container">
                <div className="search">
                    <input type="text" name="Search" className="textField" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {
                        let filterSearch = resturantList.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilterResturantList(filterSearch)
                    }}>Search</button>
                </div>
                <button onClick={() => {
                    const filterResturant = resturantList.filter(item => item.info.avgRating > 4.3)
                    updateResturantList(filterResturant)
                }}>Top Rated Resturant</button>
            </div>
            <div className="resturant-container">
                {
                    filterresturantList.map((item) => <Link key={item.info.id} to={`/resturant/${item.info.id}`}><RestroCard RestoData={item} /></Link>)
                }
            </div>
        </div>
    )
}
export default Body