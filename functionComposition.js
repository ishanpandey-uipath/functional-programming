/*
First class functions - https://youtu.be/1ieC6JZmF5w?feature=shared
means something is just a value
A first class function can go anywhere that any other value can go
*/

// Number can be stored in an array, so can a function
var arr11 = [8, function(){console.log("Hi from array")}];
arr11[1](); // invoking the function using ;

// Number can be stored in a property of object, so can a function
var obj11 = {
    num: 20,
    funct: function() {
        console.log("Hello from object");
    }
};
obj11.funct();

// A number can be needed as part of expression, so can a function
console.log(10 + (function(){return 10;})()); // anonymous function (function(){return 10;})() - last () is used to invoke it

// A number can be passed to a function; similarly a function can be passed to a function
var addTwo = function(num, fn) {
    console.log(num + fn());
};
addTwo(10, function(){return 28;});

// A number can be returned from a function, so can be a function
var returnNum = function(){return 28;};
var newNum = returnNum();
console.log(newNum);

var returnFunct = function() {
    return function() {
        console.log("Hello from inside a function");
    };
};
var newFunct = returnFunct();
newFunct();
