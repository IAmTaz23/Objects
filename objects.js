//Objects
//OOP Object_Oriented Programming

const pen = {
    type: "ballpoint", // property - key:value pair
    color: "blue", //object literal
    brand: "Bic",
    material: "plastic"
}

// dot notation
//myObject.myProperty

console.log(pen.brand)
console.log(pen.color)
console.log(pen.type)
console.log(pen.material)

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen.`)

//modifying objects
//changing a property
pen.color = "navy"; // modifying the color property
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen.`)


//adding a new property
pen.price = "$2.50";
console.log(`My pen costs ${pen.price}`)

//Methods
function describe(pen) {
    return `My ${pen.material} ${pen.type} pen has ${pen.color} ink and its brand is ${pen.brand}`
}

console.log(describe(pen))

const pen2 = {
    type: "ballpoint", // property - key:value pair
    color: "black", //object literal
    brand: "pilot",
    material: "metal",


//Method
describe() {
    return `My ${this.material} ${this.type} pen has ${this.color} ink and its brand is ${this.brand}`;
    }
}
console.log(pen2.describe())
console.log()

console.log(Math.PI)
console.log(Math.random())