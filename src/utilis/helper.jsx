export function filterData(searchInput,restaurants){
    const rest = restaurants.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return rest;
}