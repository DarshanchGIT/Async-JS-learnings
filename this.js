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


// call - apply - bind 









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

