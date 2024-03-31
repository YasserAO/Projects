
// // Import JS scripts
     
     import {pushComments} from './ElementPushers/CommentPush.js';
     import { runListners } from './Run/RunListners.js';
     import { returnMainComment } from './ElementPushers/MainCommentPush.js';
    

    



        
let MyData;

await fetch('.//data.json')
.then(data => data.json())
.then(data => {
    MyData=data;
})


let comments = MyData.comments
let main=document.getElementsByTagName('main');
let commentForm=document.getElementById('commentForm');


pushComments(comments,main[0],commentForm);


runListners();


let sendButton = document.querySelector('.user-Comment');
sendButton.addEventListener('click',function(){
    returnMainComment(MyData);
    runListners();
})


let comments2 = document.querySelectorAll('.score');

let scores=[];
for(let c of comments2){
    let b=c.innerHTML;
    let scorer = parseInt(c.querySelector('p').innerHTML);
   
    scores.push({b,scorer});

}
window.localStorage.setItem('Scores',JSON.stringify(scores));
console.log(scores);

        
  













