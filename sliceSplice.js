// slice first 

// The slice() method returns selected elements in an array, as a new array.
// Does not modify the original arr/string
const nameArr = ['darshan', 'Rahul', 'Gaurav', 'Madhav']

// when no arguments passed 
const arr = nameArr.slice();
console.log("After Slice : " + arr); //O/P : same as before

//let's pass one argument first

// O/P : uske aaghe ke items dega(inclusive)
const arr2 = nameArr.slice(0) //o/p : ['darshan', 'Rahul', 'Gaurav', 'Madhav']
console.log(arr2)
const arr3 = nameArr.slice(1) //O/P : ['Rahul', 'Gaurav', 'Madhav']
console.log(arr3)
console.log('Original slice arr: ' + nameArr)

//giving negative worlk like => arr.len + index = {4 + (-2) = 2} 
const arr4 = nameArr.slice(-2) //O/P : ['Gaurav', 'Madhav']
console.log(arr4)

//giving something beyong the arr.length results in nothing
const arr5 = nameArr.slice(-7)
console.log("Here " + "hello !!" + arr5)

console.log("TWO ARGUMENTS BLOCK !!")

// TWO ARGUMENTS

// pehla starting index(inclusive), second ending index(exclusive) -- same hoga to empty result

// both same, res will be empty 
const arr6 = nameArr.slice(3, 3);
console.log(arr6);

const arr7 = nameArr.slice(1, 3);
console.log("arr7 : " + arr7);

// When starting ind > ending ind results in nothing
const arr10 = nameArr.slice(3, 2);
console.log("s > e : " + arr10);

// When both exceeds the arr.length results in nothing
const arr11 = nameArr.slice(6, 8);
console.log(" s and e > arrLength : " + arr11);

// negative ending argument == nameArr.length + (index)
//for this e.g: nameArr.len = 4, index = -2 =>  4 + (-2) = 2 will be new ending index
const arr8 = nameArr.slice(0, -1);
console.log("arr8 : " + arr8);

//When both negative result is nothing literallyy nothing
const arr9 = nameArr.slice(-2, -3);
console.log("When both negative" + arr9);

//When both negative result but s.ind < e.ind
const arr12 = nameArr.slice(300, 100);
console.log("Both neg, but s < e: " + arr12);

// slice on strings 

console.log("ON STRINGS")

const str = "ABCDE";

//same as arrays, uske aaghe se(inclusive)
const str1 = str.slice(2); //O/P : CDE
const str2 = str.slice(-2); // 0/p : DE
const str3 = str.slice(7); //o/p : nothing
const str4 = str.slice(0);
console.log(str4)

//amazing cheej => converts string to arr
const strArr = str.split("");
console.log(strArr)


console.log("TWO ARGUMENTS BLOCK !!")

// TWO ARGUMENTS

//if starting index is out of bound like less than 0 => will be set to 0  

const str5 = str.slice(-871,-67); 
console.log("slice on strings: " + str5)

// slice(-871, -67):
// -871: Since the string has only 5 characters, this index will be adjusted to the start of the string (index 0).
// -67: Similarly, this index will be adjusted to the start of the string because the string's length is much shorter than 67 characters from the end.



//SPLICE => MODIFIES THE ORIGINAL ARRAY

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// // splice(start, deleteCount, item1, item2, /* …, */ itemN)

console.log("IN SPLICE BLOCK")

const arrSplice = [1,2,3,4,5,6,7,8,9,10];

// splice(start, deleteCount, item1, item2, ..., itemN)
const op = arrSplice.splice(-4,1,11,12,13,14,15);

// deep copy => modified itself aswell
//splice will take all el from org arr from index 3(inclusive) and put in result 


console.log("Splice : " + op);
console.log("Splice Original array : " + arrSplice)


//closure example

// A closure is created when the inner function two is defined. The closure gives two access to the variables in the scope of the one function, even after one has finished executing.
// In this case, the inner function two can access and log the variable one because it "remembers" the scope in which it was created.

function one(){
  const one = "Hey, I'm a closure fn";
  function two(){
    console.log(one);
  }
  two();
}
one();
