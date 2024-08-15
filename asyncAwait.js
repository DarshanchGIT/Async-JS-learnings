// Async/Await : 
// 1. (harkirat notes first)
// 2. It's syntactic sugar to work with promises in a more elegant way.

// Async always returns a promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 resolved")
  }, 2000);
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 resolved")
  }, 4000);
})

//traditional way 
// promise.then((res) => console.log(res));

//async/await way 
// Await keyword = used in front of promise and can only be used inside an async function. 
const main = async () => {
  console.log("Hello! World")

  const data = await promise1;
  console.log('Inside main : 1st-time')
  console.log(data)

  // ------ Try calling it again -------
  // What you thought? 1st time will be printed after 3 seconds but it's not. -> because they run parallely.

  const data2 = await promise2;
  console.log('Inside main : 2nd-time')
  console.log(data2)
}
// if we call main
// main();
// main output : 
// 1.Inside main
// 2. Promise resolved

// ------ If I had done the same in traditional way of .then => It wouldn't wait for the promise to resolve.
const main2 = () => {
  promise1.then((res) => {
    console.log(res)
  });
  console.log("In main2")
}
// main2();


// When calling promise1 firstly with the timeout of 2000 ms, 2 tak both will run parallely.
// and will console log the first promise and second one still behind with 2000ms, so second promise will console log after 2 seconds of promise1 execution.
// Imagine if we call promise2 firstly with 4000ms timeout and later promise1 with 2000ms it's not like ki promise1 will execute, NO !! I t will wait for 4000ms and to execute promise1 and promise2 together.

//Example of asyn/await 

const getApi = async () => {
  try {
    const response = await fetch("https://api.github.com/users/DarshanchGIT");
    const data = await response.json();
    console.log(data);

    // Get the container element
    const api = document.getElementById("div");

    // Display the user's name
    api.innerHTML = `<h1>${data.name}</h1>`;

    // Create an img element
    const img = document.createElement("img");

    // Set the src attribute to the user's avatar URL
    img.src = data.avatar_url;

    // Optionally, set some styles for the image
    img.style.width = "200px"; // Example width
    img.style.height = "200px"; // Example height

    // Append the img element to the container
    api.appendChild(img);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getApi();

