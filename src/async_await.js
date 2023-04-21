const api_key  = ''


const getImage = async () =>{
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
    const data = await response.json()
    return data
}
getImage().then(({data})=>{
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})

const render_image = async () =>{
    const {data} = await getImage()
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
}
render_image()

