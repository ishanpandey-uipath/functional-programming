/*
Asynchronous JS:

Good Parts of Callback:

Bad Parts of Callback:
- Leads to lots of issues:
    1. Callback hell -> unmaintainable and unreadable
    2. Inversion of control
    ....

Promises becomes easier when we understand above two issues.
*/

/*
Js is synchronous single threaded language
    - just do one thing at a time
    - single callstack
    - all code gets quickly executed by JS engine

What if we really needed to wait for something?
    - Callbacks
        - wrap code inside a callback function. And pass it to some function say setTimeout(() => {
            
        }, timeout);
        - job of setTimeout is to execute this callback when time passes.
*/

const cart = ["shoes", "shirts"];
api.createOrder(cart, function() {
    api.proceedForPayment(function() {
        api.createOrderSummaryPage(function() {
            api.updateWallet()
        })
    })
})
// Callback hell (Pyramid of Doom):
// createOrder when gets executed will execute -> proceedForPayment -> createOrderSummaryPage -> updateWallet

// we gave payments control and blindly trusting create order api to do
// what if create order never calls callback, happens twice?
// Callback = passing a function to another function


