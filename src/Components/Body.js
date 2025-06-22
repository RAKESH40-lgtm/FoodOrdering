import { useState } from "react"
import { resturant_list } from "../utils/mockdata"
import RestroCard from "./RestroCard"

const Body = () => {
    const [resturantList,updateResturantList]=useState(resturant_list)
    return (
        <div className="body-container">
            <div className="filter-container">
            <button onClick={()=>{
                const filterResturant=resturantList.filter(item=>item.info.avgRating>4.3)
                updateResturantList(filterResturant)
            }}>Top Rated Resturant</button>
            </div>
            <div className="resturant-container">
                {
                    resturantList.map((item) =><RestroCard key={item.info.id} RestoData={item} />)
                }
            </div>
        </div>
    )
}
export default Body