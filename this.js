"use strict";
// ALL about this keyword 

// this => 
// at global space - I t will point to window object
console.log(this);

// if inside a funcion => depends upon mode ( strict or non-strict) 
// gives window object in non-strict mode
// gives undefined  in strict mode
function x() {
  console.log("Inside a simple function");
  console.log(this);
}
x();

// if inside an object => this will point to the object
const obj = {
  a: 49,
  getVal: function() {
    console.log("Inside an object")
    console.log(this)
    console.log(this.a)
  },
};
obj.getVal()


// CALL - APPLY - BIND

//1. CALL

let name1 = {
  firstName: "Darshan",
  lastName: "Choudhary",
  // method too here
  fullName: function(city, age) {
    console.log("My name is " + this.firstName + " " + this.lastName + ", " + "I reside in " + city + " and I'm " + age + " years old")
  }
}
let name2 = {
  firstName: "Nikita",
  lastName: "Singh",
}

// I want to print name2, but I lack the method to do that ?? => this is where we use "CALL"
// ki name1 ke method ko name2 ki properties inherit karle

// more technical terms => we are actually pointing this in name1 to out name2 object

name1.fullName.call(name2)

//imagine there's more u want but property doesn't there in the name
// can do more 

console.log("By call method")
name1.fullName.call(name2, "Noida", 21)


// 2. APPLY METHOD - differs from apply only in way of passign arguements generally
// pass it like in a array 

console.log("By apply method")
name1.fullName.apply(name2, ["Ghaziabad", 23])


//3. BIND METHOD - binds the method to the object and returns a new function

const bindFn = name1.fullName.bind(name2, "Ghaziabad", 23)
// so yaha bindFn basically is a function, so this can be invoked
console.log("By bind method")
bindFn();








// this inside arrow function => Arrow doesn't have their own "this" keyword, it will take the this from its parent.

const arrowF = () => {
  console.log("In normal arrow function");
  console.log(this); // O/P: Points to Window object 

}
arrowF();

//providing lexical enivronment
const parentObj = {
  y: 6,
  //arrow funntion 
  arrowF2: () => {
    console.log("In modified arrow function");
    console.log(this); // O/P: Points to global object
  }
}
parentObj.arrowF2()


// "this" inside a DOM element
//when doing like this 
// <button type="button" onClick="alert(this)">Click me </button>

//output will be => HTMLbuttonElement itself 


//when declaring that function seperately in JS file 
// will result into window object
const handleClick = () => {
  alert(this);
}


//"this" inside a setTimeout
const darshan = () => {
  setTimeout(() => {
    console.log("Inside Timeout functon")
    console.log(this)
  }, 3000)
}

// darshan();

// let's see how this behaves on nested obj
const object1 = {
  z: 89,
  x: 45,

  // function to get x 
  getX: function() {
    console.log("Value of x : " + this.x)
  },

  //nested object in object1
  nestedObject1: {
    y: 34,
    getY: function() {
      console.log("Value of y : " + this.y)
      console.log("Value of z : " + this.z)
      // console.log(this.y)
    }
  },
}
object1.getX();
object1.nestedObject1.getY();

