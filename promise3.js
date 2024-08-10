// Promises example

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 1 rejected too !!"), 3000);
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 rejected"), 1000)
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 rejected too !!"), 2000)
})

// Promise APIs

const promiseArr = [promise1, promise2, promise3];

//1(a). Promise.all([p1,p2..pn]) - takes array of promises and returns a single promise. If all promises are resolved, it returns an array of values.

// 1(b). Promise.all([p1,p2..pn]) => it will resolve or rejcted with max time of (promse1,promise2...promise N);

//1(c). Promise.all() => as soon as any of the promise is rejcted, Promise.all() will be failure too and will return a reason of rejection.

Promise.all(promiseArr)
  .then(result => console.log(result))
  //let's try to reject to see the difference
  .catch(err => console.log(err))

//2. Promise.allSettled([p1,p2...pn]) => it will return an array of objects with status and value of each promise.


Promise.allSettled(promiseArr)
  .then(results => {
    results.forEach(r => console.log({ value: r.value, status: r.status }));
  });


//3. Promise.race([p1,p2...pn]) => it will return the first promise to be resolved or rejected.

Promise.race(promiseArr)
  .then(res => console.log(res))
  .catch(err => console.log(err))

//4(a). Promise.any([p1,p2...pn]) => it will return the first promise to be resolved.(will wait for the first promise to be resolved)

// 4(b). if all fails in Promise.any() => it will return a AggregateError[err1,err2...errn];

Promise.any(promiseArr)
.then(res => console.log(res))
  //suppose all of em got rejected
.catch(err => {
  console.log("In promise.any() " + err)
  console.log(err.errors)})