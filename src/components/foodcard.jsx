import { ImgCdn } from '../config';

const FoodCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating
}) =>{
  return(
    <div className='image-card'>
      <img
      className='cardimg' 
      alt='card image'
      src={ImgCdn +
       cloudinaryImageId}
      />
      <h2>{name}</h2>
      <p>{cuisines.join(",")}</p>
      <p>{avgRating}stars</p>
    </div>
  )
}

export default FoodCard;