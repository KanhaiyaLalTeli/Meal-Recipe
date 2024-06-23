import renderItem from './renderSingleItem.js';
import addToFav from './addItemToFav.js';

const allItems=document.getElementById('items');
const simmerContainer=document.getElementById('simmerContainer');

function renderItems(items){
 
    simmerContainer.classList.add('hide');
    items.forEach((item) => {
    let name=item.strMeal;   
    if(name.length>40)
        {
            name =  name.substring(0, 40);
            name =  name+"...";
        } 
    
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
    itemName.innerText=name;
    itemContainer.append(itemName)
    const addToFavBtn=document.createElement('button');
    addToFavBtn.innerText="Add to Favorite";
    addToFavBtn.classList.add("favoriteBtn")
    itemContainer.append(addToFavBtn)


 
    allItems.append(itemContainer);
 
        while(spIngredient.firstChild){
            spIngredient.lastChild.remove();
        }
    

   itemContainer.addEventListener('click',() =>renderItem(item))

   addToFavBtn.addEventListener('click', addToFav.bind(null,item),false)
        
    });   
}

export default renderItems;