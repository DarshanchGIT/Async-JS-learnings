const cart = ["shoes", "kurta", "pants", "shirt"];
console.log("Code started");
const prom = createOrder(cart);

// If my promise "prom" resolves, print orderId
prom.then(function(orderId) {
  console.log(orderId); // Expected output after 5 seconds: "12345"
}) //if rejected then throw the error
  .catch(function(err) {
    console.log(err);
  });

// No creating createOrder, which will work as a custom promise
function validateOrder(orderId) {
  return orderId === "12345";
}

function createOrder(cart){
  //calling the promise constructor
  const logicOfCreateOrder = new Promise(function(resolve, reject) {
    //here some stupid logic will be performed such as:
    //validate orderId
    const orderId = "12345";

    if (cart.length > 4) {
      // error yaha throw karwadete
      const err = new Error("Cart is full");
      reject(err);
    } else if (validateOrder(orderId)) {
      //isko resolve karwadete, true return karawake
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    } else {
      const err = new Error("Invalid order");
      reject(err);
    }
  });
  return logicOfCreateOrder;
};
