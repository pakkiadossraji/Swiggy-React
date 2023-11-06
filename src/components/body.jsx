import FoodCard from "./foodcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utilis/helper";

const Body = () =>{
    const [searchInput,setSearchInput] = useState();
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);

    useEffect (() =>{
       getRestaurants();
        console.log("console hook")
    },[]);

   async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9477073&lng=79.8373775&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData,"json")
        setAllRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
// not render component
    if(!allRestaurants) return null;
    // if(filteredRestaurants?.length === 0) return(<h1>No restaurants</h1>);
// conditional rendering
    return allRestaurants?.length === 0 ? (<Shimmer/>
    ):(
        <>
            <div className="search-div">
                <input type="text" placeholder="Search" 
                value={searchInput} 
                className="search-field"
                 onChange={(e)=>{
                    setSearchInput(e.target.value)
                 }}   />
                <button className="search-btn"
                    onClick={()=>{
                        const data = filterData(searchInput,allRestaurants);
                        setFilteredRestaurants(data)
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.map((restaurant)=>{
                return(
                    <Link to={"/restaurant/" + restaurant.info.id} key = {restaurant.info.id}>
                    <FoodCard {...restaurant.info} />
                    </Link>
                )})}
            </div>
        </>
    )
}
export default Body  