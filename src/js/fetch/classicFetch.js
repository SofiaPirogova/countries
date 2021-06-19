 function getFetch(key,url, create, place) {
    
    const options = { 
        method: 'GET',
        headers: {
            Authorization: key,
        },
    };
    
    fetch(url, options).then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        const images = create(data.photos);
        place.before(...images);
    });
};

export default getFetch;