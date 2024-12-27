export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=OSIWe2h8QCs6WikRUROVjodQy8VUT9Hf&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};