import MyKey from './key.js'


async function getData(key=MyKey,que='country,city',address){
    let url =`https://geo.ipify.org/api/v2/${que}?apiKey=${key}`;
    if(address) url = url + `&ipAddress=${address}`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

export default getData