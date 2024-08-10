import pushData from "./structure.js";
import getData from "./fetcher.js";
import MapModule from "./mapscript.js";
import isValidIP from "./ipcheck.js";
import dataCreator from "./Data.js";

const { mapscript, changeLocation } = MapModule;



let data = await getData();





const Data = dataCreator(data).Data
const lat = dataCreator(data).lat
const lng = dataCreator(data).lng





pushData(Data);
mapscript(lat,lng);


let searchButton = document.querySelector('.submit');
searchButton.addEventListener('click',async ()=>{
    const searchInput = document.querySelector('.search input');
    const inPut = searchInput.value;
    if(isValidIP(inPut)) {
        const addData = await getData(undefined,undefined,inPut);
        pushData(dataCreator(addData).Data);
        changeLocation(dataCreator(addData).lat,dataCreator(addData).lng);
       
        
    }
    else {
        alert('Wrong IP Address');
    }
    return
        
    


})



