import { ImgCdn } from '../config';

const CartCard = ({
  name,
  description,
  imageId,
  price
}) =>{
  return(
    <div className='image-card'>
      <img
      className='cardimg' 
      alt='card image'
      src={ImgCdn +imageId}/>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Rupees: {price/100}</p>
    </div>
  )
}

export default CartCard;