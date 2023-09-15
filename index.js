function capitalizeArrayStrings(strings) {
  //Write your code here
  const newArray = [];
  for (let i = 0; i < strings.length; i++) {
    let newStrings = strings[i].toUpperCase();
    newArray.push(newStrings);
  }
  return newArray;
}
console.log(capitalizeArrayStrings(["hello", "world", "me"]));

//This is the factorial recusrsion function.
function factorial(x) {
  //checks for a real number greater than 0
  if (x === 0) {
    return 1;
  } else {
    //returns the number passed in, x, multiplied by the factorial function again but minus 1
    return x * factorial(x - 1);
  }
}
//this sets the value going into the function
const x = 10;
//if statement checks to see a non-negative number is entered before running the function
if (x > 0) {
  //prints to the console while calling the factorial function and passing in the varaible x.
  console.log(factorial(x));
}

//saves arrow function as varaible named myFunc. automatically returns the statement following the arrow
const myFunc = () => num ** 2;

//sets the varaible that will be the input for the function
let num = 4;
//prints to the console while calling myFunc variable and pasing in the num variable.
console.log(myFunc(num));

// let x = 4;
// x = () => x ** 2;
// console.log(x);

//Work on these
//REDUCE
//SPLICE
//SLICE
//MAP
//Object Constructor Function
