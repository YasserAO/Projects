export  function indexSelected(){
    let selected = document.querySelector('.selectedThumb');
    let index=0;
    if(selected)
    {
        index= Array.from(selected.parentElement.children).indexOf(selected);
    }
    
    return index;
}