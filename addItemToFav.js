function addToFav(item,e){
    e.stopPropagation()
    let flag=true;

     favList= JSON.parse(localStorage.getItem("favorite")) ?? [];

     for (const key of favList) {
        if(key.idMeal==item.idMeal)
            {
                flag=false;     
                break;
            }
     }
        if(flag){
            favList.push(item);
            localStorage.setItem("favorite",JSON.stringify(favList))
        }
        else{
            alert("Item Already in Your Favorite List")
        }

}
export default addToFav;