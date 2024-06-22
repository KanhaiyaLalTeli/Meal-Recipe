import getAllItems from './getAllItems.js';

const listofAllitemsName =await getAllItems();

 function autoSuggestions(){
        // console.log(listofAllitemsName);
        
        const input=searchInput.value;
        let result=[];
        if(input.length){
            result=listofAllitemsName.filter((word)=>{
               return word.toLowerCase().includes(input.toLowerCase())
            })
        }
        while(searchResuleContainer.firstChild)
            {
                searchResuleContainer.lastChild.remove();
            }
        renderSearchResult(result);
        if(!result.length){
            // searchResuleContainer.innerHTML='';
            // searchReasult.classList.add('hideScrollBar');
        }
    
    


function renderSearchResult(result){
    
    const searchReasult=document.createElement('ul');
    searchReasult.classList.add('searchReasult');
    result.map((item)=>{
        const r1=document.createElement('li');
        r1.innerText=item;
        r1.classList.add("searchOutputitem")
        searchReasult.append(r1);
        searchResuleContainer.append(searchReasult)

         r1.addEventListener('click',()=>renderClickedItem(item))
    })

}

function renderClickedItem(item){
    searchInput.value=item;
    searchResuleContainer.innerHTML='';
    // searchResuleContainer.innerHTML='';
}
}

export default autoSuggestions;