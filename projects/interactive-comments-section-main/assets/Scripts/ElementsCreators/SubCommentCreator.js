export function CreateSubComment(id2,id,name,time,content,score,replyTo){
    let user='juliusomo'
    let comment=document.createElement('div');
    comment.classList.add('comment');
    comment.classList.add('user');
    comment.setAttribute('id',`sub-comment-${id}-${id2}`)

    if(name==user){
      comment.innerHTML=`
      <div class="header">
        <img src="images/avatars/image-${name}.png" alt="${name}">
        <p class="name">${name}</p>
        <p class="you">you</p>
        <p class="time">${time}</p>
      </div>
      <div class="content">
        <p><span class="tag">@${replyTo}</span> ${content}</p>
      </div>
      <div class="score">
        <img class="plus" src="images/icon-plus.svg" alt="icon-plus">
        <p>${score}</p>
        <img class="minus"src="images/icon-minus.svg" alt="icon-minus">
      </div>
      <div class="reply user-edit">
        <img src="images/icon-edit.svg" alt="">
        <p>Edit</p>
      </div>
      <div class="reply user-delete">
            <img src="images/icon-delete.svg" alt="delete">
            <p class="delete">Delete</p>
      </div>
      
    `
    }
    else{
      comment.innerHTML=`
      <div class="header">
        <img src="images/avatars/image-${name}.png" alt="${name}">
        <p class="name">${name}</p>
        <p class="time">${time}</p>
      </div>
      <div class="content">
        <p><span class="tag">@${replyTo}</span> ${content}</p>
      </div>
      <div class="score">
        <img class="plus" src="images/icon-plus.svg" alt="icon-plus">
        <p>${score}</p>
        <img class="minus" src="images/icon-minus.svg" alt="icon-minus">
      </div>
      <div class="reply">
        
        <img src="images/icon-reply.svg" alt="">
        <p>Reply</p>
      </div>
      
    `
    }
    

  return comment;
}