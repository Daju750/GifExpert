const getGifs = async(categoria, offset) => {

        const url = `https://api.giphy.com/v1/gifs/search?q= ${encodeURI(categoria)} &limit=10&api_key=LpDcirz11GWcewjgiRDCnfHX1uZ6oVG4&offset=${offset}`;
        const resp = await fetch(url);
        const {data, pagination} = await resp.json();
        console.log(pagination, "data");

        const gifs = data.map( img=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return { pagination, gifs};
    
}

export default getGifs