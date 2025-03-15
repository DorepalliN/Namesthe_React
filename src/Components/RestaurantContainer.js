import { CDN_URL } from "../Utiles/Constants";

const RestaurentContainer =(props) =>{
    const {name,cuisines,avgRating,costForTwo,deliveryTime} =props.resdata?.data;
    return(
        <div>
            <div className="Restaurent_01">
                <img className="food_image" src={CDN_URL+props.resdata.data.cloudinaryImageId} alt="foodimage"></img>
                <h4>{name}</h4>
                <h5>{cuisines.join(" , ")}</h5>
                <h5 className="Rating">{avgRating}</h5>
                <h5>{costForTwo/100} for two</h5>
                <h5>{deliveryTime}mins</h5>
            </div>
        </div>
    )
}

export default RestaurentContainer;