
import autoSuggestions from './inputAutoSuggestions.js'
import getItemDetails from './getItemDetails.js';
import renderFavItem from './renderFavPage.js';

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const back=document.getElementById('back');
const backfromFav=document.getElementById('backfromFav');
const favorite=document.getElementById('favorite');
const mainPageBtn=document.getElementById('mainPageBtn');
let searchResuleContainer=document.getElementById('searchResuleContainer');

let SerachItem='';
let emptySearch='';

function getInput(){
    SerachItem=searchInput.value;     
    getItemDetails(SerachItem);
    searchInput.value="";
    searchResuleContainer.innerHTML='';
}

getItemDetails(SerachItem);

function goToBack(){
    getItemDetails(SerachItem);
    SerachItem="";
}

searchBtn.addEventListener('click',getInput);
mainPageBtn.addEventListener('click',()=>getItemDetails(emptySearch))
favorite.addEventListener('click',renderFavItem)
searchInput.addEventListener('keyup',autoSuggestions);
back.addEventListener('click',goToBack)
backfromFav.addEventListener('click',goToBack)

