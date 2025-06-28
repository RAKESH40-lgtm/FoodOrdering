import { useState } from "react"
import { LOGO_URL } from "../utils/constant"

const Header = () => {
    const [userInfo,setUserInfo]=useState("Login")
    return (
        <div className="headers-logo">
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            <div className="logo-menu">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button className="user" onClick={()=>userInfo === 'Login' ? setUserInfo("LogOut") :setUserInfo("Login")}>{userInfo}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header