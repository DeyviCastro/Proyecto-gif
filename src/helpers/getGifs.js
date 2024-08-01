export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7J0TuwVbegQUNyCL0QACN1Atgo5qHsrK&q=${category}&limit=20`;

    const resp = await fetch(url)
    const { data } = await resp.json();

    // console.log(data)
    const gifs = data.map(item =>({
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url
    }))

    // console.log(gifs)
    return gifs;
}
