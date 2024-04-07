export function fetchData(){
    await fetch('https://api.adviceslip.com/advice')
    .then(data => data.json())
    .then(data => {
        MyData=data.slip;
    })
}