// A promise is a type that represents some result that will be available some time in the future.

// Promises wrap around code that takes time to finish.

// Promises allow functions that should take time to complete to return immediately by wrapping 
// the time-consuming code in a Promise and returning it.

// Let's take a look 
// wait is a function that returns a Promise immediately
function wait(ms) {
  return new Promise((resolve) => setTimeout(() => resolve("result from promise"), ms));
}

// Lets call it and prove it returns immediately by calling console.log() straigt after
wait(10000)
console.log("This is displayed immediately but the program won't exit for 10s");

// Promises can either resolve successfully or be rejected
// wait always resolves successfully.
// we can queue up a function to be run when the Promise resolves
wait(5000).then(res => console.log("Finally!!"))

// .then itself returns a new Promise that returns whatever the function passes to it returns
let waitForNumber = wait(5000).then(res => 42);
waitForNumber.then(num => console.log(`My favorite number is ${num}`));

// If .then returns a Promise then that means we can chain them together!
wait(3000)
  .then(res => res + ", and another promise")
  .then(res => res + ", and yet ANOTHER promise")
  .then(res => console.log(res));

// So what's the big deal? It's all about chaining Promises together
function getUser(name) {
  // imagine we use the name to get the user
  return new Promise(resolve => setTimeout(() => resolve({ id: 42, name: "oliver", age: 36 }), 1000));
}

function getPermissions(id) {
  // imagine we use the id to get the users permissions
  return new Promise(resolve => setTimeout(() => resolve(['LOGIN','ADD_USER','DELETE_ALL']), 1000));
}

getUser("oliver")
  .then(user => getPermissions(user.id))
  .then(permissions => console.log(permissions));

// Up until now we've only seen Promises that resolve successfully but what happens if they don't?
function mightFail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() > 0.5 ? resolve() : reject(), 1000);
  });
}

mightFail()
  .then(res => console.log("Yay"))
  .catch(err => console.error("Uh Oh"))

// Promises fail fast
// [explain what I mean by that]
let willReject = () => new Promise((res, rej) => rej());
let willResolve = () => new Promise((res, rej) => res());


// EXERCISES
// 1. what will be printed
willResolve()
  .then(res => {
    console.log("foo");
    return willResolve();
  })
  .then(res => {
    console.log("bar");
  })
  .catch(err => console.log("baz"))

// 2. what will be printed?
willResolve()
  .then(res => {
    console.log("foo");
    return willReject();
  })
  .then(res => {
    console.log("bar");
  })
  .catch(err => console.log("baz"))


// 3. what will be printed?
willReject()
  .then(res => {
    console.log("foo");
    return willResolve();
  })
  .then(res => {
    console.log("bar");
  })
  .catch(err => console.log("baz"))