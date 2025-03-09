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

const reslist = [
    {
      "type": "restaurant",
      "data": {
        "id": "334475",
        "name": "KFC",
        "uuid": "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        "city": "Bangalore",
        "area": "BTM Layout",
        "totalRatingString": "5000+ ratings",
        "cloudinaryImageId": "ny3e3qxd91wkgvxf6i3o",
        "cuisines": ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 36,
        "avgRating": "4.2",
        "address": "KFC, 100 Feet Road, BTM Layout, Bangalore",
        "locality": "BTM Layout"
      }
    },
    {
      "type": "restaurant",
      "data": {
        "id": "56789",
        "name": "McDonald's",
        "uuid": "dfe3b06b-cf4d-4c9a-b39d-12fb3a4e8f7d",
        "city": "Bangalore",
        "area": "Indiranagar",
        "totalRatingString": "3000+ ratings",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/3/88015ff4-7986-47bf-9fa9-4412f2ff60f2_283a3b09-da7f-4ad9-abc2-95c81e717d64.jpeg",
        "cuisines": ["Burgers", "Fries", "Soft Drinks"],
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 28,
        "avgRating": "4.5",
        "address": "McDonald's, 12th Main Road, Indiranagar, Bangalore",
        "locality": "Indiranagar"
      }
    },
    {
      "type": "restaurant",
      "data": {
        "id": "89012",
        "name": "Domino's Pizza",
        "uuid": "a37c28f7-5d49-4db1-bf8c-6c5c5f9e8e0f",
        "city": "Bangalore",
        "area": "Whitefield",
        "totalRatingString": "4000+ ratings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/468aa25f-1270-47a5-afb4-556c0ab4c4b0_867923.JPG",
        "cuisines": ["Pizza", "Italian", "Desserts"],
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 30,
        "avgRating": "4.3",
        "address": "Domino's Pizza, ITPL Road, Whitefield, Bangalore",
        "locality": "Whitefield"
      }
    },
    {
      "type": "restaurant",
      "data": {
        "id": "45678",
        "name": "Haldiram's",
        "uuid": "c123abcd-4567-89ef-0123-456789abcdef",
        "city": "Bangalore",
        "area": "Jayanagar",
        "totalRatingString": "3500+ ratings",
        "cloudinaryImageId": "i0hmks3eaowv7wntls4p",
        "cuisines": ["Indian", "Sweets", "Snacks"],
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 40,
        "avgRating": "4.1",
        "address": "Haldiram's, 4th Block, Jayanagar, Bangalore",
        "locality": "Jayanagar"
      }
    },
    {
      "type": "restaurant",
      "data": {
        "id": "67890",
        "name": "Subway",
        "uuid": "f12a34bc-567d-89ef-0123-abcdef123456",
        "city": "Bangalore",
        "area": "Koramangala",
        "totalRatingString": "2800+ ratings",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/28/174052ca-cf46-4010-8989-514097fb0035_1c51cc85-feeb-4f0c-aeb0-afb764b704b0.jpg",
        "cuisines": ["Healthy Food", "Salads", "Sandwiches"],
        "costForTwoString": "₹320 FOR TWO",
        "deliveryTime": 25,
        "avgRating": "4.0",
        "address": "Subway, 80 Feet Road, Koramangala, Bangalore",
        "locality": "Koramangala"
      }
    },
    {
      "type": "restaurant",
      "data": {
        "id": "78901",
        "name": "Pizza Hut",
        "uuid": "a56789bc-1234-def0-5678-abcdef123456",
        "city": "Bangalore",
        "area": "MG Road",
        "totalRatingString": "4100+ ratings",
        "cloudinaryImageId": "xl69dzoqlms62y9eqij6",
        "cuisines": ["Pizza", "Fast Food", "Beverages"],
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 35,
        "avgRating": "4.2",
        "address": "Pizza Hut, Brigade Road, MG Road, Bangalore",
        "locality": "MG Road"
      }
    },
    {
      "type": "restaurant",
      "data": {
        "id": "90123",
        "name": "Burger King",
        "uuid": "a90123bc-4567-def0-8901-abcdef789012",
        "city": "Bangalore",
        "area": "Marathahalli",
        "totalRatingString": "3200+ ratings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/24/aeb72b6e-2ef4-4ae4-afed-c6727cdb7681_56096.jpg",
        "cuisines": ["Burgers", "Fries", "Cold Beverages"],
        "costForTwoString": "₹330 FOR TWO",
        "deliveryTime": 29,
        "avgRating": "4.1",
        "address": "Burger King, Outer Ring Road, Marathahalli, Bangalore",
        "locality": "Marathahalli"
      }
    },
    {
      "type": "restaurant",
      "data": {
        "id": "12345",
        "name": "Taco Bell",
        "uuid": "b12345cd-6789-ef01-2345-abcdef678901",
        "city": "Bangalore",
        "area": "Electronic City",
        "totalRatingString": "2500+ ratings",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/17/0b6859d3-2c18-4a88-b2b5-3dc58051cd2b_ccc4f499-fcb4-4989-817c-7c9dce98c358.jpeg",
        "cuisines": ["Mexican", "Tacos", "Fast Food"],
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 27,
        "avgRating": "4.3",
        "address": "Taco Bell, Neeladri Road, Electronic City, Bangalore",
        "locality": "Electronic City"
      }
    }
  ]
    
const Body =()=>{
    return(
        <div className="body">
        <div className="Search">
            < input  type="text" placeholder="search"/> <button>🔍</button>
        </div >
        <div className="Restaurentcontainer">

           { reslist.map((restaurant)=>
           <Restaurentcontainer key = {restaurant.data.id} resdata ={restaurant}/>
        )}
        
        
        {/* <Restaurentcontainer resname ="venkateshwara foods" cusine="veg rice, veg pulov, bajji, puri"/>
        <Restaurentcontainer resname ="sri lakshmi foods" cusine="biryani, mixed rice, dal kichidi, puri"/> */}
        
        </div>
        </div>
    )
}

const Restaurentcontainer =(props) =>{
    const {name,cuisines,avgRating,costForTwo,deliveryTime} =props.resdata?.data;
    return(
        <div>
            <div className="Restaurent_01">
                <img className="food_image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resdata.data.cloudinaryImageId} alt="foodimage"></img>
                <h4>{name}</h4>
                <h5>{cuisines.join(" , ")}</h5>
                <h5 className="Rating">{avgRating}</h5>
                <h5>{costForTwo/100} for two</h5>
                <h5>{deliveryTime}mins</h5>
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



