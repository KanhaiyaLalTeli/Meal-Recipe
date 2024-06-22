import removefromfav from './removeItemFromFav.js';
import renderItem from './renderSingleItem.js';


const itemsContainer=document.getElementById('itemsContainer');
const singleItemPage=document.getElementById('singleItemPage');
const favItemPage=document.getElementById('favItemPage');
const favItem=document.getElementById('favItem');

let favList=[];

function renderFavItem(){

    itemsContainer.classList.add('hide');
    singleItemPage.classList.add('hide');
    favItemPage.classList.remove('hide');

    while(favItem.firstChild){
        favItem.lastChild.remove();
    }


    favList= JSON.parse(localStorage.getItem("favorite")) ?? [];
    
    favList.forEach((item)=>{

    const itemContainer=document.createElement('div');
    itemContainer.classList.add('itemContainer');
    const imageContainer=document.createElement('div');
    imageContainer.classList.add("imageContainer");
    const itemImg=document.createElement('img');
    itemImg.classList.add('itemImg');
    itemImg.src=item.strMealThumb;
    imageContainer.append(itemImg);
    itemContainer.append(imageContainer)
    const itemName=document.createElement('div');
    itemName.innerText=item.strMeal;
    itemContainer.append(itemName)
    const removeFromFavBtn=document.createElement('button');
    removeFromFavBtn.innerText="Remove From Favorite";
    removeFromFavBtn.classList.add("removefavoriteBtn")
    itemContainer.append(removeFromFavBtn)

   favItem.append(itemContainer);

   itemContainer.addEventListener('click',() =>renderItem(item))

   removeFromFavBtn.addEventListener('click', removefromfav.bind(null,item),false)

    })
    
}

export default renderFavItem;