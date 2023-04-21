const person = {
    fisrt_name: "Gaby",
    last_name: "Guaman",
    age: 18,
    address: {
        city: "Loja",
        street: "strrea"
    }
}
const {fisrt_name:name, last_name, age, address:{city, street} } = person
console.log(name)
console.log(last_name)
console.log(age)
console.log(city)

const get_person = ({last_name, fisrt_name, range=23})=>{
    return `${last_name}, ${fisrt_name}, ${range}`
}

const person1 = get_person(person)
console.log(person1)