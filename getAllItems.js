const searchInput = document.getElementById('searchInput');
const simmerContainer=document.getElementById('simmerContainer');
let listofAllitems=[];
let listofAllitemsName=[];
async function getAllItems(){

    const result = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const json = await result.json();

    async function getItem(key){
        const result1 = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + key.strCategory);
        const json1 = await result1.json();

        if(json1){
            // console.log(json1.meals);
            const meals=json1.meals;

            for(const mealName of meals)
                {
                    listofAllitems.push(mealName);
                    listofAllitemsName.push(mealName.strMeal)
                }
        }
    }

    const categories = json.categories;
    
    for(const category of categories) {
        await getItem(category); 
    }
    window.listofAllitemsName=[...listofAllitemsName];
    if(listofAllitemsName){
        searchInput.disabled=false;
        // simmerContainer.classList.add('hide');
        return listofAllitemsName;
        
    }
    
    
}

export default getAllItems;