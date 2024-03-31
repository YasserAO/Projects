export function DownVote(){
    let score = this.parentElement.querySelector('p');
    
    if(parseInt(score.innerHTML)<=0){
        return
    }
    else{
        let newScore = parseInt(score.innerHTML)-1;
        score.innerHTML=newScore;
    }
    
}