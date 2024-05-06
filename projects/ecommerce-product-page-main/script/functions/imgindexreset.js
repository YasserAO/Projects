export function imgIdexReset(imageIndex){
    if(imageIndex>3) imageIndex = 0;
    if(imageIndex<0) imageIndex = 3;
    return imageIndex
}