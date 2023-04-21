const personajes = ['Goku', 'Vegeta', 'Trunks']
const [, , p3] = personajes
console.log(p3)

const get_per = ()=>{
    return ['Goku', 'Vegeta']
}

const [p_one, p_two] = get_per()


const test =(valor) =>{
    return [valor, ()=>{ console.log("Hello wordl!")}]
}
 const [name, set_nombre]= test("23")
 console.log(name)
 console.log(set_nombre())