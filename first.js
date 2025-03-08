import React from "react";
import ReactDOM from "react-dom/client";

 
const Header = () => {
    return(
        <div className="headercontiner">
            <div className="logo">
                <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"  alt="logo_image" />
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




const Appcomponent = () =>{
    return (
        <div className="Appcontiner">
         <Header/>
        </div>

    )
 }


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Appcomponent/>);



