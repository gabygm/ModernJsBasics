const api_key  = ''

const request_gift = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)

request_gift
            .then(res => res.json())
            .then(({data})=>{
                const {url} = data.images.original
                const img = document.createElement('img')
                img.src = url
                document.body.append(img)
                console.log(data)
            })
            .catch(console.warn)
