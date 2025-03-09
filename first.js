import React from "react";
import ReactDOM from "react-dom/client";

 
const Header = () => {
    return(
        <div className="headercontiner">
            <div className="logo">
                <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"  alt="logo_image" />
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

const resobj = {
    "type": "restaurant",
    "data": {
      "id": "334475",
      "name": "KFC",
      "uuid": "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
      "city": "Bangalore",
      "area": "BTM Layout",
      "totalRatingString": "5000+ ratings",
      "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
      "cuisines": ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      "tags": [],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 40,
      "slaString": "36 MINS",
      "lastMileTravel": 3.5,
      "slugs": {
        "restaurant": "kfc-btm-layout-btm",
        "city": "bangalore"
      },
      "address": "KFC, 100 Feet Road, BTM Layout, Bangalore",
      "locality": "BTM Layout",
      "parentId": 547,
      "avgRating": "4.2",
      "totalRatings": 5000,
      "veg": false,
      "favorite": false,
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      }
    }}
const Body =()=>{
    return(
        <div className="body">
        <div className="Search">
            < input  type="text" placeholder="search"/> <button>🔍</button>
        </div >
        <div className="Restaurentcontainer">
        <Restaurentcontainer resdata ={resobj}/>
        {/* <Restaurentcontainer resname ="venkateshwara foods" cusine="veg rice, veg pulov, bajji, puri"/>
        <Restaurentcontainer resname ="sri lakshmi foods" cusine="biryani, mixed rice, dal kichidi, puri"/> */}
        
        </div>
        </div>
    )
}

const Restaurentcontainer =(props) =>{
    return(
        <div>
            <div className="Restaurent_01">
                <img className="food_image" src="https://images.alphacoders.com/862/thumb-1920-862639.jpg" alt="foodimage"></img>
                <h4>{props.resdata.data.name}</h4>
                <h5>{props.resdata.data.cuisines.join(" , ")}</h5>
                <h5 className="Rating">{props.resdata.data.avgRating}</h5>
                <h5>{props.resdata.data.costForTwo/100}</h5>
            </div>
        </div>
    )
}



const Appcomponent = () =>{
    return (
        <div className="Appcontiner">
         <Header/>
         <Body/>
        </div>

    )
 }


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Appcomponent/>);



