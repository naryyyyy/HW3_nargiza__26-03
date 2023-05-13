var food=[
    'milk','beer','beer','milk','milk'
]
var badfood=[
    'beer'
]
for(var i=0; i<food.length; i++){
   if (badfood.includes(food[i].toLowerCase())) {
    console.warn(`${food[i]} bad`)
    continue
   }
   console.log(`${food[i]} good `)
}
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }