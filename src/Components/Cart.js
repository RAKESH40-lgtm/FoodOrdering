import { useDispatch, useSelector } from "react-redux"
import ResturantMenuList from "./ResturantMenuList"
import { clearItem } from "../utils/Store/Slices/cart-slice"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const clearCart = () => {
        dispatch(clearItem())
    }
    return (
        <div className="w-7/12 m-auto">

            <h1 className="text-2xl text-center m-2 p-4">My Cart</h1>
            <button className="p-2 bg-green-100 text-black rounded-xl flex justify-center m-auto cursor-pointer" onClick={clearCart}>Clear Cart</button>
            {cartItems?.length === 0 && <h1 className="text-center m-2 p-4">Cart is empty</h1>}
            <ResturantMenuList MenuList={cartItems} />
        </div>

    )
}
export default Cart