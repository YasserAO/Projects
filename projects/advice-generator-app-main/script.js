import { adviceChanger } from "./assests/scripts/adviceChanger.js";
import { getMultipleData } from "./assests/scripts/MultipleData.js";
import { getData } from "./assests/scripts/MultipleData.js";





const limit=5;
let myAdvice;
let index=0;

let firstAdvice = await getData();
let p=document.querySelector('p');
let span=document.querySelector('h1 span');
p.innerHTML=firstAdvice.advice;
span.innerHTML=firstAdvice.id;



let button = document.querySelector('.dice-container');
button.addEventListener('click',DiceIt);



function DiceIt(){

    adviceChanger(myAdvice[index]); 
    index=index+1;
    if(index>=limit-1){
        main();
        index=0;
    }

}



async function main(){
    const number =limit;
    const advices = await getMultipleData(number);
    myAdvice=advices;
    
}

main();


