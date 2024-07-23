import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import store from "../utilis/store"


const Heading = () => {
    return(
      <a href='/'>
        <img 
        alt="applogo" 
        className='app-logo'  
        src="https://files.yappe.in/place/full/food-villa-family-restaurant-hotel-4642683.webp"
        />
     </a>
    )
  }
  const HeaderComponent = () => {
const [loggedIn,setLoggedIn] = useState(false);

const cartItems = useSelector(store => store.cart.items);
console.log(cartItems,"cartitems")
    return (
        <div className="Header-div">
          <Heading/>
            <div className="nav-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart -{cartItems.length} items</Link></li>
                <li><Link to="/instamart">Instamart</Link></li>
              </ul>
            </div>
            {loggedIn ? (<button onClick={()=>setLoggedIn(false)}>Log Out</button>
            ):(
            <button onClick={()=>setLoggedIn(true)}>Log In</button>)}
        </div>
    ) 
  }
  export default HeaderComponent 