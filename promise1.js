const cart = ["pants", "kurta", "shirt", "shoes"]

// first thing is callback hell - Pyramind of Doom
// What is callback hell? - It's when one function did dependent on other function to execute than to follow the code.
// which makes code highly unmaintainable and difficult to debug.
// Also callback hell introduce version control - which tranfers the control of a function entirely to another function waiting for that to complete then will execute.
// How does it look like ?

createOrder(cart, function(orderId) {
  paymentGateway(orderId, function(orderId) {
    orderSummary(orderId, function(orderId) {
      updateWallet(paymentInfo);
    })
  })
})
// here every other function after creating an order depended on each other to execute.
console.log("Hi darshan !!");

// So How can we actually get rid of this shit ?

// PROMISES => An object representing completion/ failure of asynchronus operation. Exist in three stages 1. Pending 2. Fullfilled 3. Rejected.
// Promise objects are immmutable.(can be shared with anyone around without worrying about the data being modified => Which basically solves our inversion control issue we had with callbacks)

// for example :
const promise = createorder(cart);
promise.then(function(orderId) {
  paymentGateway(orderId);
})

// Promise chaining => always use a "return" to return a promise make it flow in a promise chain

//for example:
createOrder(cart).then(function(orderId) {
  return paymentGateway(orderId);
})
  .then(function(orderId) {
    return orderSummary(paymentInfo)
  })
  .then(function(paymentInfo) {
    return updateWallet(paymentInfo);
  })
