// PART 1: Consuming Promises

/*
How things work after promises?

Promises = attaching callback function to promise object
we have control of the program with us

const cart = ["shoes", "pant", "shirt"];
const promise = createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
});

returns {data: undefined} i.e. promise object immediately, and at later point in time when createOrder returns 200 with order details fills the data
here, to add callbacks we can use
and .then() executes when data is returned and is called 100% just once and only once. Thus we solved inversion of control.

PromiseState = pending, fulfilled, rejected
PromiseResult = data returned from fetch method

promise data is immutable, when it is fulfilled with fetch
data = PromiseResult
e.g. user.data.sth = <> cannot be done
*/

const GITHUB_API = "https://api.github.com/users/ishan-backend";
const user = fetch(GITHUB_API); // fetch returns us a promise
console.log(user);
user.then(function(data) {
    console.log(data);
});

/*
Promise Chaining: how to write code which has a ordered dependency -> gets us out of callback hell

createOrder(cart)
.then(function(data){
    return proceedToPayment(data); // return data from promise to return to chain
})
.then(function(data){
    return createOrderSummaryPage(data);
})
.then((summaryData) => addLoyalty(summaryData));

Common mistake while promise chaining:
- we want data to pipe through next chain item => add return statement
- if you use arrow functions, you wont need return statement
*/


// PART 2: CREATING PROMISES: INCREASE TRUST FOR OTHER DEVS FOR THEM TO CONSUME YOUR PROMISES
