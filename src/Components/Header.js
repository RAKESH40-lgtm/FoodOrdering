import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router"
import useOnlineStatus from "../utils/Hooks/useOnlineStatus"
import { useSelector } from "react-redux"

const Header = () => {
    const [userInfo, setUserInfo] = useState("Login")
    const onlineStatus = useOnlineStatus()
    const cartItems=useSelector(store=>store.cart.items)
    return (
        <div className="flex justify-between bg-blue-500">
            <div className="w-30 ">
                <img src={LOGO_URL} />
            </div>
            <div className="flex ">
                <ul className="flex items-center">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/cart">Cart ({cartItems?.length})</Link></li>
                    <button className="px-4" onClick={() => userInfo === 'Login' ? setUserInfo("LogOut") : setUserInfo("Login")}>{userInfo}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header