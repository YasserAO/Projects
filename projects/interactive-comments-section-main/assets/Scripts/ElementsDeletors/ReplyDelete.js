export function DeleteElementById(id){
    let form = document.getElementById(id);

    
    if(form){
        let childs = form.children;
         for(let kid of childs){
             kid.style.display='none';
       }
        
        form.style.height='0';
        form.style.padding='0';
        form.style.margin='0';
        setTimeout(() => {
             form.remove();            
        }, 300);
    }
    
}