 import { useDispatch, useSelector } from "react-redux";
import CartCard from "./cartCard";
import { clearCart } from "../utilis/cartSlice";

 const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items);

   const  dispatch = useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart());
    };
    return(
        <div>
            <h1>CART ITEMS -{cartItems.length}</h1>
            <button className="clear-cartbtn" onClick={()=> handleClearCart()}>Clear Cart</button>
            <div className="cartItem-flex">
                {cartItems.map((items) =>
                (
                <CartCard key={items?.card?.info?.id} {...items?.card?.info}/>
                ))}
             </div>
        </div>
    )
 }
  export default Cart;