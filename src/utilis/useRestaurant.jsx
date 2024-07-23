import { useState,useEffect } from "react";
import { Fetch_Info } from "../config";

const useRestaurant = (resId)=>{
    const [restaurant,setRestaurant] = useState(null );
    const [restaurant2,setRestaurant2] = useState(null);
    //get api data
    //return restaurant menu
    useEffect(()=>{
        getRestInfo();
    },[]);
    async function getRestInfo(){
        console.log(Fetch_Info + resId)
        const info = await fetch(Fetch_Info + resId);
        const json = await info.json();
        console.log(json.data,"jason");
        setRestaurant(json.data.cards[0]?.card?.card?.info);
        setRestaurant2(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }
    console.log(restaurant,"res")
    console.log(restaurant2,"res2")
    return [restaurant,restaurant2]
}
export default useRestaurant;