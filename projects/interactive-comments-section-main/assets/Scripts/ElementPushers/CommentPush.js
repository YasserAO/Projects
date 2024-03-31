import {CreateComment} from '../ElementsCreators/CommentCreator.js';
import {CreateSubComment} from '../ElementsCreators/SubCommentCreator.js';

export function pushComments(comments,main,commentForm){

    for(let comment of comments ){
        let id=comment.id;
        let name = comment.user.username;
        let time = comment.createdAt;
        let content=comment.content;
        let score = comment.score;

        let mainComment=CreateComment(id,name,time,content,score);
        if( comment.replies.length !==0){

            for(let subComment of comment.replies){
                let id2=subComment.id;
                name = subComment.user.username;
                time = subComment.createdAt;
                content=subComment.content;
                score = subComment.score;
                let replyto=subComment.replyingTo;

                let  TheSubComment = CreateSubComment(id2,id,name,time,content,score,replyto);
                let subCommentSection = mainComment.querySelector('.sub-comment');
                subCommentSection.appendChild(TheSubComment);
            }

        }
        if(commentForm){
            main.insertBefore(mainComment,commentForm);
        }
        else{
            main.appendChild(mainComment);
        }
        
    





    }
}