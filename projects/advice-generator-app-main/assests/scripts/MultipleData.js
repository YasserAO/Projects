export async function getData(){
    const randomParam = Math.random();
    const url = `https://api.adviceslip.com/advice?random=${randomParam}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.slip;  
}



export async function getMultipleData(number){
    const advices=[];
    const promises=[];
    
    for(let i=0;i<number;i++){
        promises.push(getData()); 
        
        
    }

    await Promise.all(promises)
        .then(results => {
            results.forEach(advice => {advices.push(advice)});
        })
        .catch(error =>{console.error('Error Fetching Advice:',error);});

    return advices

}