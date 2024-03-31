
export function UpdateComment(){
    let comment=this.parentElement;
    
    let names=['amyrobson','maxblagun','ramsesmiron'];
    let text = comment.querySelector('textarea');
    let name = text.value.split(/\s+/);
    let user;
    // console.log(name);
    if(name[0].includes('@')){
        name[0]=name[0].replace('@','');
        user = name[0];

    }
    let span = document.createElement('span');
    span.className='tag';
    for(let nom of names){
        if(nom==user){
            span.innerHTML='@'+nom+' ';
            name.shift();

           
        }
    }
    name = name.join(' ');
    




    
    
    let p = document.createElement('p');
    
    p.append(span);
    p.append(name);
    
    comment.innerHTML='';
    comment.append(p);
}