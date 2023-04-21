import get_heroe_by_id from './data/data_heroes'
const getHeroeById =  (id)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{  
            const heroe = get_heroe_by_id(5)
            if(heroe){
                resolve(heroe)
            }else{
                reject("No se pudo encontrar el heroe")
            }   
        }, 2000)
    })
}

getHeroeById(4).then(console.log).catch(console.warn)