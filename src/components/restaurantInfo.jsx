import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImgCdn } from "../config";
import Shimmer from "./shimmer";
import useRestaurant from "../utilis/useRestaurant";

const RestaurantInfo = ()=>{
    
    const {resId} = useParams();
    // const [restaurant,setRestaurant] = useState({});
    // const [restaurant2,setRestaurant2] = useState(null);
    const restaurant = useRestaurant(resId);
    console.log(restaurant) 
    
    return (!restaurant) ? <Shimmer/> : (
        <div>
           
            <div className="resInfo-flex">
                <div>
                    <h1>
                         Retaurant id: {resId}
                    </h1>
                    <div>
                        <h2>{restaurant[0].name}</h2>
                        <p>{restaurant[0].cuisines}</p>
                        <p>{restaurant[0].areaName}</p>
                        <p>{restaurant[0].totalRatingsString}</p>
                    </div>
                    <img 
                        alt="ResImage"
                        title="resImage"
                        className="resInfo-img"
                        src={ImgCdn + restaurant[0].cloudinaryImageId}
                    />
                </div>
                <div>
                    <h2>Menu</h2> 
                    <ul> 
                        {restaurant[1].map((dish, index) => (
                            <div key={index}>
                                    <li>{dish?.card?.info?.name}</li>
                            </div>
                        ))}
                    </ul> 
                </div>
            </div>
        </div>
    )
}
 export default RestaurantInfo