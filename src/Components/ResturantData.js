import { useState } from "react"
import ResturantMenuList from "./ResturantMenuList"

const ResturantData = ({ categories ,showAccordian,showFunction}) => {
    const handleAccordian = () => {
        showFunction()
    }
    return (
        <div  className="w-7/12 bg-gray-200 my-1.5 p-2 " >
            <div className="flex justify-between cursor-pointer" onClick={handleAccordian}>
                <span>{categories.title} ({categories.itemCards?.length})</span>
                <span>🔽</span>
            </div>
            {showAccordian && <ResturantMenuList MenuList={categories.itemCards} />}
        </div>
    )
}
export default ResturantData