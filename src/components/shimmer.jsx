const Shimmer =()=>{
    return(
        <><div className="restaurant-list">
           {Array(10)
           .fill("")
           .map((e,index) => (
           <div key={index} className=" content-placeholder shimmer-div"></div>))}
          </div>
        </>
    )
}
export default Shimmer;