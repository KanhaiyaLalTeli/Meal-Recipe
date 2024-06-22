const allItems=document.getElementById('items');
const itemsContainer=document.getElementById('itemsContainer');
const singleItemPage=document.getElementById('singleItemPage');
const favItemPage=document.getElementById('favItemPage');
const simmerContainer=document.getElementById('simmerContainer');


import renderItems from './renderItems.js';

async function getItemDetails(item){
    itemsContainer.classList.remove('hide');
    singleItemPage.classList.add('hide');
    favItemPage.classList.add('hide');

    const result= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+item);
    const items = await result.json();
 // const result1= await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=52772");
    // const itemById = await result1.json();

    if(items){
        while(allItems.firstChild){
            allItems.lastChild.remove();
        }
        renderItems(items.meals);
    }  
    simmerContainer.classList.add('hide');  
}

export default getItemDetails;