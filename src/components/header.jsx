import { useState } from "react"
import { Link } from "react-router-dom"


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

    return (
        <div className="Header-div">
          <Heading/>
            <div className="nav-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Cart</Link></li>
              </ul>
            </div>
            {loggedIn ? (<button onClick={()=>setLoggedIn(false)}>Log Out</button>
            ):(
            <button onClick={()=>setLoggedIn(true)}>Log In</button>)}
        </div>
    )
  }
  export default HeaderComponent 