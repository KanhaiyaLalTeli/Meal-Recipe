const itemsContainer=document.getElementById('itemsContainer');
const singleItemPage=document.getElementById('singleItemPage');
const favItemPage=document.getElementById('favItemPage');
const spImage=document.getElementById('spImage');
const spName=document.getElementById('spName');
const spIngredient=document.getElementById('spIngredient');
const youtube=document.getElementById('youtube');
const spRecipeContainer=document.getElementById('spRecipeContainer');

function renderItem(item){
    // e.stopPropagation()
    itemsContainer.classList.add('hide');
    singleItemPage.classList.remove('hide');
    favItemPage.classList.add('hide');

   
    spImage.src=item.strMealThumb;

    spName.innerText=item.strMeal;

    for(let i=1;i<=20;i++)        
        { if(item[`strIngredient${i}`])
            {
                // console.log(item.strIngredient+i)
                const ing= document.createElement('div')
                ing.innerText=item[`strIngredient${i}`] +" - " + item[`strMeasure${i}`];  
                ing.classList.add("ing");              ;
                spIngredient.append(ing);
            }            
        }

        spRecipeContainer.innerText=item.strInstructions;
        youtube.src=item.strYoutube;

        youtube.addEventListener('click',function(){
            window.open(item.strYoutube, '_blank');
        })
                
}

export default renderItem;