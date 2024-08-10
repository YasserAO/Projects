function createText(text){
    const p = document.createElement('p');
    p.innerHTML=`${text}`;
    return p
}


function pushData (data){

    let info = document.querySelector('.informations');
    let ps = info.querySelectorAll('p');
    ps.forEach(ps => {
        ps.remove();
    });

    const ipaddress = createText(data.ipaddress);
    const location = createText(data.location);
    const timezone = createText(data.timezone);
    const isp = createText(data.isp);

    info.querySelector('.ipaddress').append(ipaddress);
    info.querySelector('.location').append(location);
    info.querySelector('.timezone').append(timezone);
    info.querySelector('.isp').append(isp);
}


export default pushData