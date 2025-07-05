import { useEffect, useState } from "react"
import RestroCard from "./RestroCard"
import ShimmerUi from "./ShimmerUi.js"
import { Link } from "react-router"

const Body = () => {
    const [resturantList, updateResturantList] = useState([])
    const [filterresturantList, setFilterResturantList] = useState([])
    const [searchText,setSearchText]=useState("")
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const callAPi = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1154662&lng=77.6069977&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await callAPi.json()
        updateResturantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterResturantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(resturantList.length ===0){
        return <ShimmerUi />
    }
    return (
        <div className="body-container">
            <div className="filter-container">
                <div className="search">
                    <input type="text" name="Search" className="textField" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)}} />
                    <button onClick={()=>{
                        let filterSearch=resturantList.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase()))
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
                    filterresturantList.map((item) => <Link key={item.info.id} to={`/resturant/${item.info.id}`}><RestroCard  RestoData={item} /></Link>)
                }
            </div>
        </div>
    )
}
export default Body