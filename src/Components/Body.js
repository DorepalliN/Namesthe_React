
import RestaurentContainer from "./RestaurantContainer.js";
import reslist from "../Utiles/Mockdata.js";
import { useState } from "react";
import reslist from "../Utiles/Mockdata.js";


   

const Body =()=>{

    const [listofrestaurants, setlistofrestaurants]= useState(reslist); 
    return(
        <div className="body">
        <div className="Search">
        <button className="TopRating" 
        onClick={()=>
            {const filterdList = listofrestaurants.filter(
                
            (res)=>res.data.avgRating > 4);

        setlistofrestaurants(filterdList);

        }}>
            Top Rated Restaurants</button>
            < input  type="text" placeholder="search"/> <button>🔍</button>
        </div >
        <div className="RestaurentContainer">

           { listofrestaurants.map((restaurant)=>
           <RestaurentContainer key = {restaurant.data.id} resdata ={restaurant}/>
        )}
        
        
        {/* <Restaurentcontainer resname ="venkateshwara foods" cusine="veg rice, veg pulov, bajji, puri"/>
        <Restaurentcontainer resname ="sri lakshmi foods" cusine="biryani, mixed rice, dal kichidi, puri"/> */}
        
        </div>
        </div>
    )
}

export default Body;