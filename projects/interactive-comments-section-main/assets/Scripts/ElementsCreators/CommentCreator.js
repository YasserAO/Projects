export function CreateComment(id,name,time,content,score){
  let user='juliusomo'
  let comment=document.createElement('div');
    comment.classList.add('comment-label');
    comment.setAttribute('id',`comment-${id}`)
  if(name==user){
    comment.innerHTML=`<div class="comment user">
    <div class="header">
      <img src="images/avatars/image-${name}.png" alt="image-${name}">
      <p class="name">${name}</p>
      <p class="you">you</p>
      <p class="time">${time}</p>
    </div>
    <div class="content">
      <p>${content}</p>
    </div>
    <div class="score">
      <img class="plus" src="images/icon-plus.svg" alt="icon-minus"> 
      <p>${score}</p>
      <img class="minus" src="images/icon-minus.svg" alt="icon-minus">
    </div>
    <div class="reply user-edit">
      <img src="images/icon-edit.svg" alt="edit">
      <p>Edit</p>
    </div>
    <div class="reply user-deleteMain">
            <img src="images/icon-delete.svg" alt="delete">
            <p class="delete">Delete</p>
    </div>
    
  </div>
  <div class="sub-comment">
    
  </div>`
  }
  else{
    comment.innerHTML=`<div class="comment">
    <div class="header">
      <img src="images/avatars/image-${name}.png" alt="image-${name}">
      <p class="name">${name}</p>
      <p class="time">${time}</p>
    </div>
    <div class="content">
      <p>${content}</p>
    </div>
    <div class="score">
      <img class="plus" src="images/icon-plus.svg" alt="icon-minus"> 
      <p>${score}</p>
      <img class="minus" src="images/icon-minus.svg" alt="icon-minus">
    </div>
    <div class="reply">
      <img src="images/icon-reply.svg" alt="">
      <p>Reply</p>
    </div>
  </div>
  <div class="sub-comment">
    
  </div>`
  }
    

  return comment;
}