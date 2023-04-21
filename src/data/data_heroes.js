import {heroes} from './heroes'

console.log(heroes)

const get_heroe_by_id = (id)=>{
    return heroes.find((x)=>x.id === id)
}

console.log(get_heroe_by_id(4))

export default get_heroe_by_id