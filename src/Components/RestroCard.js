import { IMAGE_URL } from "../utils/constant"

const RestroCard = (props) => {
    const { name, avgRating, cuisines, sla, cloudinaryImageId } = props.RestoData.info
    return (
        <div className="w-[250px] m-6 p-5 bg-gray-100 hover:bg-gray-300">
            <div className="p-3">
                <img src={`${IMAGE_URL}${cloudinaryImageId}`} />
            </div>
            <p className="text-2xl p-1">{name}</p>
            <p className="p-1">
                <span>{avgRating} stars</span>
                <span className="px-2">{sla.deliveryTime} mins</span>
            </p>
            <p className="p-1 text-[14px] text-black">{cuisines.join(",")}</p>
        </div>
    )
}
export const withEnhancedRestroCard = (RestroCard) => {
    return (props) => {
        const {aggregatedDiscountInfoV3}=props?.RestoData?.info
        return (
            <>
                <p className="relative top-68 left-30 text-white">{aggregatedDiscountInfoV3.header} <span>{aggregatedDiscountInfoV3.subHeader}</span></p>
                <RestroCard {...props} />
            </>
        )
    }
}
export default RestroCard