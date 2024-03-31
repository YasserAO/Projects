export function UpVote(){
    
    let score = this.parentElement.querySelector('p');
    console.log(score.innerHTML)
    let newScore = parseInt(score.innerHTML) +1;
    score.innerHTML=newScore;
}