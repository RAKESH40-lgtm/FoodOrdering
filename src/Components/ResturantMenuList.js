import { ITEM_IMAGE_URL } from "../utils/constant"

const ResturantMenuList = ({ MenuList }) => {
    return (
        <>
            {
                MenuList.map((item,index) =>
                    <div className="border-b-1 flex my-2 p-2 justify-between" key={index}>
                        <div>
                            <p>{item?.card?.info?.name}</p>
                            <p>{item?.card?.info?.description}</p>
                        </div>
                        <div >
                            <img src={ITEM_IMAGE_URL+item?.card?.info?.imageId} alt="" className="w-30" />
                            <button className="bg-green-100 p-2 rounded-xs relative bottom-4 cursor-pointer left-2">Add</button>
                        </div>

                    </div>)
            }
        </>
    )

}
export default ResturantMenuList