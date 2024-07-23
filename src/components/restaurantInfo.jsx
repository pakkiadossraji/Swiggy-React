import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImgCdn } from "../config";
import Shimmer from "./shimmer";
import useRestaurant from "../utilis/useRestaurant";
import { addItem } from "../utilis/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantInfo = ()=>{
    
    const {resId} = useParams();
    // const [restaurant,setRestaurant] = useState({});
    // const [restaurant2,setRestaurant2] = useState(null);
    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    const handleAddToCart = (dish) => {
        dispatch(addItem(dish));
        console.log(dish,"dish")
    }

    console.log(restaurant) 
    
    return (!restaurant) ? <Shimmer/> : (
        <div>
           {console.log("restt")}
            <div className="resInfo-flex">
                <div className="menu-card-flex">
                    <div>
                        <h2>{restaurant[0]?.name}</h2>
                        <img 
                        alt="ResImage"
                        title="resImage"
                        className="resInfo-img"
                        src={ImgCdn + restaurant[0]?.cloudinaryImageId}
                    />
                    </div>
                    <div>
                            <p>{restaurant[0]?.cuisines}</p>
                            <p>{restaurant[0]?.areaName}</p>
                            <p>{restaurant[0]?.totalRatingsString}</p>
                    </div>
                    
                </div>
                {/* <div>
                    <button className="addtoCart-btn" onClick={()=>handleAddToCart()}>Add Item</button>
                </div> */}
                <div className="menu-card">
                    <h2>Menu</h2> 
                    <ul> 
                        {restaurant[1]?.map((dish, index) => (
                            <div key={index} className="menu-list">
                                <img className="menulist-img" alt="menu-img" src={ImgCdn + dish?.card?.info?.imageId} />
                                    <li>{dish?.card?.info?.name} 
                                        <button className="addtoCart-btn" 
                                            onClick={()=> handleAddToCart(dish)}>Add
                                        </button>
                                    </li>
                            </div>
                        ))}
                    </ul> 
                </div>
            </div>
        </div>
    )
}
 export default RestaurantInfo