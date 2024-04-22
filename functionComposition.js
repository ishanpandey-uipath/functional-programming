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

/*
    Higher Order Functions: https://youtu.be/O9lMynNdka4?feature=shared
    - are functions that operate on other functions by either taking them as arguments or returning them.
    - first class functions make it possible to create higher order functions.
*/

let things = ['Elephant', 'truck', 'Ball', 'batting'];
things.sort(function(a, b){
    let x = a.toLowerCase(), y = b.toLowerCase();
    if(x < y) {
        return -1; // first argument should come before second argumemt
    } else if(x === y) {
        return 0; 
    } else {
        return 1; // second argumemt should come before first argument
    }

});

/*
    Closures:
    - closely related to scope.
    - JS uses function scope - functions determine scope of items present in the function.

    - local variables of a function, kept-alive after a function has returned.
    - OR when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
    - OR a closure function is a function having access to parent scope, even after parent function is closed.
*/

var funct1 = function funct1(){
    var a = 2, b = 3;
    
    var funct2 = function funct2() {
        console.log(a+b);
    };
    funct2();
};

// var funct3 = function funct3(){
//     console.log(a+b);
// };

funct1();
// funct3();

/*
    Callbacks - are functions that execute outside of scope.
*/
var funct4 = function funct4(){
    var a = 2, b = 3;
    
    var funct5 = function funct5() {
        console.log(a+b);
    };
    setTimeout(funct5, 1000); // funct4 closes, still then funct5 retains its scope
};

funct4();

/*
    Immediately invoked function expression
*/
(function counter() {
    var item = 0;

    var print = function print() {
        console.log(item);
    };

    var incrementBy100 = function() {
        item = item+100;
        print();
    };

    setTimeout(incrementBy100, 1000);
}());

/*
    Storing values returned from IIFE
*/
var APP = (function iife() {
    var multiplyBy2 = function multiplyBy2(num) {
        num = num*2;
        console.log(num);
    };

    return {
        sum: 15,
        func: multiplyBy2
    };
}());

APP.func(APP.sum);