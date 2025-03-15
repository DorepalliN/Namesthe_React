 import { LOGO_URL } from "../Utiles/Constants";

 export const Header = () => {
    return(
        <div className="headercontiner">
            <div className="logo">
                <img src={LOGO_URL}  alt="logo_image" />
            </div>
            <div className="title">
               <h2>Namasthe Food Lovers</h2>
            </div>
            <div className="Nav_items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Summary</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;