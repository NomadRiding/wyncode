let kateContact = {
  name: "Kate B.",
  phone: "202-338-8899",
  city: "Washington",
  state: "DC"
}
let kateUser = {
  name: "Kate",
  birthday: "September 16, 1991"
}

let kateData = {...kateContact, ...kateData}

// the ... is a spread operator, to collect the value data from the objects above.

Oject Destructuring syntax

let person = {
  name:"Pedro"
  age: 32,
  hairColor: 'red'
};

let {name,age} = person;

--------------------------------------------------------------------------

Working with Arrays

let myArray = [1, "foo"];

myArray.push("true");

// will insert value into the array, in this case myArray will now contain true.


let myArray = [1, "foo", true];

let p = myArray.pop();

// pop() removes the last element in the array, in this case reassigned to p.

let myArray = [1, "foo", true];

let l = myArray.shift();

// shfit() will remove the first element, in this case reassigned to l


let arr = [1,2,3,4,5,6,7,8,9,10];

let newArray = arr.slice(3,6);

// slice will omit the output of everything outside of the selected values

// in this case from value 3 to but not including value 6
// answer shown 4,5,6 but not 7 because it's in value 6.


let numberAry - [5, 120, 27];

numberAry.sort();

// will sort in alphabetical order.


let fruitAry = ['apples', 'pears', 'oranges'];

let logElements = function(element) {
  console.log(element);
}

let logUpperCaseElement = function(element) {
  console.log(element.toUpperCase());
}

fruitAry.forEach(logElement);

// change element function to do something it will execute it with the array.
// in this case, it will print. Each element will be printed

fruitAry.forEach(logUpperCaseElement);

// in this case, it will change each words to uppercase words

let newFruitAry = fruitAry.map(logUpperCaseElement);
console.log(newFruitAry);

// this creates a copy of the previous array with a new name, without affecting the old array.
// map will use the function declared.

//Factory function is a function that creates an object

function person(values) {
  return {
    name: values[0],
    age: values[1],
    isActive: true
  }
}

let deactivateUser = function(user); {
  user.isActive = false;
}

let listUsers = [
  ['pat',25],
  ['pedro', 30],
  ['jane', 28],
  ['Maria', 22]
]

let newUsers = listUsers.map(person);
newUsers.forEach(deactivateUser);
console.log(newUsers);
