import { LOGO_URL } from "../utils/constant"

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}
export default Header