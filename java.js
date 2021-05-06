// 1. Array Destructuring
// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring to complete this task.

const food_array = ["banana", "cucumber", "bread", "cakes", "pizza"]

const [fruit,vegetable,...food]= food_array

console.log(fruit,vegetable,food)
console.log("-------------")
// 2.Object Destructuring
// Create an object which contains a few key value pairs of human names and halloween costumes e.g. fran: "witch". Assign each value to a variable. Print out the values.

const halloween = {
    lars:"zombie",
    kai:"giant",
    joel:"teacher",
}
const {lars,kai,joel}= halloween
console.log(lars,kai,joel)
console.log("-------------")

// 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to print all of the band/musician's data.
// Example

const band ={
    name:"toast of death",
    greatest:"burned toast",
    nation:"Toastistan",
    genre:"Toastmetal"
}
print_it(band)
function print_it({name:a,greatest:b,nation:c,genre:d}){
    console.log(a,"|",b,"|",c,"|",d)
}