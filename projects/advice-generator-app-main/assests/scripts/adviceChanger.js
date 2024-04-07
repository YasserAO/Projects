export function adviceChanger(input){
    
    let header=document.querySelector('h1 span');
    let text=document.querySelector('p');

    header.innerHTML=input.id;
    text.innerHTML=`<q>${input.advice}</q>`;    
    
}