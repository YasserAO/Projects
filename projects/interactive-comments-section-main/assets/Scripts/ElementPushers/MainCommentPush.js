import { CreateComment } from "../ElementsCreators/CommentCreator.js";


let main=document.querySelectorAll('main');
export function returnMainComment(MyData){
        
        let mainC=main[0];
        let reply=document.getElementById('subCommentForm');
        let b=0;
        if(reply){
            b=1;
        }
        let id= document.querySelectorAll('.comment').length-1-b;

        
        id+=1;
        let name=MyData.currentUser.username;
        let time='1 min ago';
        let content=document.getElementById('mainComment');
        if(content.value==''){
            return
        }
        let score='0';

        let com = CreateComment(id,name,time,content.value,score);
        mainC.insertBefore(com,commentForm);
        content.value=''

}
