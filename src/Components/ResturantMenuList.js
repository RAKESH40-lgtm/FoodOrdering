import { useDispatch } from "react-redux"
import { ITEM_IMAGE_URL } from "../utils/constant"
import { addItem } from "../utils/Store/Slices/cart-slice"

const ResturantMenuList = ({ MenuList }) => {
    const dispatch=useDispatch()
    const handleCart=(item)=>{
        dispatch(addItem(item))
    }
    return (
        <>
            {
                MenuList.map((item,index) =>
                    <div className="border-b-1 flex my-2 p-2 justify-between" key={index}>
                        <div className="w-9/12">
                            <p className="text-2xl">{item?.card?.info?.name}</p>
                            <p>{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12">
                            <img src={ITEM_IMAGE_URL+item?.card?.info?.imageId} alt="" className="w-30" />
                            <button className="bg-green-100 p-2 rounded-xs relative bottom-4 cursor-pointer left-2" onClick={()=>handleCart(item)}>Add</button>
                        </div>

                    </div>)
            }
        </>
    )

}
export default ResturantMenuList