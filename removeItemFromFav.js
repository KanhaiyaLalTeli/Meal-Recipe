import renderFavItem from './renderFavPage.js';

let favList=[];
function removefromfav(item,e){
    e.stopPropagation()
    
     favList= JSON.parse(localStorage.getItem("favorite"))

     favList.forEach((key,index) =>{
        if(key.idMeal==item.idMeal)
            {
                favList.splice(index,1);
                localStorage.setItem("favorite",JSON.stringify(favList))
                renderFavItem();
            }
     } )

}
export default removefromfav;