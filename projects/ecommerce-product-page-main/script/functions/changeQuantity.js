export function changeQuantity(add){
    let span = document.getElementById('buyQuant');
    let number = parseInt(span.innerHTML);
    
    
    
    if(add==1){
         number++;
    }
    else if(add==0){
        if(number==0) return
        number--;
        
        
    }
    span.innerHTML=`${number}`;
}