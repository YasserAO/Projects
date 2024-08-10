function dataCreator(data){
    const Data = {
        ipaddress : data.ip,
        location: `${data.location.region}, ${data.location.city}`,
        timezone: data.location.timezone,
        isp: data.isp
    
    
    }
    const lat = data.location.lat
    const lng = data.location.lng

    return{Data , lat , lng};
}

export default dataCreator