export function createThumbnail(source,index){
    let div = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src',`${source}`);
    image.draggable=false;
    image.setAttribute('alt',`productThumbnail${index}`);
    div.classList.add('thumbContainer');
    if(index==0){
        div.classList.add('selectedThumb');
    }
    div.append(image)
    return div;
}