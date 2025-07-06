import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router"
import useOnlineStatus from "../utils/Hooks/useOnlineStatus"

const Header = () => {
    const [userInfo, setUserInfo] = useState("Login")
    const onlineStatus = useOnlineStatus()
    return (
        <div className="headers-logo">
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            <div className="logo-menu">
                <ul>
                    <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="user" onClick={() => userInfo === 'Login' ? setUserInfo("LogOut") : setUserInfo("Login")}>{userInfo}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header