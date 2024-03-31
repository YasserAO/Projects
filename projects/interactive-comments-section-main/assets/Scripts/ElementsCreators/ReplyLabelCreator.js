export function ReplyLabelCreate(type,paragraph){
let form
  if(type=='reply'){
     form = document.createElement('div');
    form.classList.add('comment','commentInput','replyComment');
    form.setAttribute('id','subCommentForm')

    form.innerHTML=`
  
        <label for="mainComment"></label>
        <textarea type="text" id="subComment" class="ipt" name="mainComment" placeholder="Add a comment..."></textarea>
        <button class="btn user-Reply" type="button" id="submit-subComment">${type}</button>
        <img src="images/avatars/image-juliusomo.png" alt="juliusomo">
      
      `
  }
  else if(type=='update'){

    form = `
    <textarea type="text" id="subComment" class="ipt" name="mainComment" placeholder="Add a comment...">${paragraph}</textarea>
    <button class="btn user-update" type="button" >${type}</button>
    `
  }
  
  return form;
}