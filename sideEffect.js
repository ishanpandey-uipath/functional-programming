/*
Side effects:

1. Change a value globally (variable, property or DS)
2. Change the original value of function argument
3. Throwing an exception
4. Printing to screen or logging
5. Triggering an external process
6. Invoking other functions that have side-effects

Your code will have side-effects. You'll manage/reduce it better.
Code with side-effects is contained together, so that other code can be relied upon.
*/

var incrementNum = function(num) { // pure function
    return num+1;
};

var users = [{name: "James", score: 1, tries: 4}, {name: "Alex", score: 2, tries: 5}, {name: "Sneha", score: 3, tries: 2}];
/*
Exercise:

Assuming name is unique identifier here.
GetScore(), GetTries()
UpdateScore(), UpdateTries()

*/

// Mutable functions - pass properties to update; prop: name/tries
var recordData = function(arr, prop) {
    users.forEach(function(val, i, a){
        if(val.name.toLowerCase() === arr[0].toLowerCase()) { // if current user val.name equals passed parameter unique identifer i.e. name
            // modify the array store update the prop passed to new value in arr[1]
            a[i][prop] = arr[1];
        }
    });
};

// Pure functions
var getScore = function(arr, name) {
    let score;
    for(let i=0; i<arr.length; i++) {
        if(arr[i].name.toLowerCase() === name.toLowerCase()) {
            score = arr[i].score;
            break;
        }
    }
    return [name, score]; // returns array
};

var getTries = function(arr, name) {
    let tries;
    for(let i=0; i<arr.length; i++) {
        if(arr[i].name.toLowerCase() === name.toLowerCase()) {
            tries = arr[i].tries;
            break;
        }
    }
    return [name, tries]; // returns array
};

var updateScore = function(arr, amt) {
    let newAmt = arr[1] + amt;
    return [arr[0], newAmt];
};

var updateTries = function(arr, tries) {
    let newTries = arr[1] + tries;
    return [arr[0], newTries];
};

let newScore = updateScore(getScore(users, "James"), 10);
recordData(newScore, "score");

// data returned from one function can be passed to another function
recordData(updateTries(getTries(users, "James"), 11), "tries");

/*
With JS, objects are passed by reference.
Since object is mutable, when that object is changed, anything referencing that object will show changes as well.

Possible Solutions and problems:

*/

var newAmount1 = function(arr, name, amount) {
    arr.forEach(function(val) { 
        if(val.name.toLowerCase() === name.toLowerCase()) {
            val.score += amount; // side-effect occurs as global variable users gets changed
        }
    });
    return arr;
}
var newArr = newAmount1(users, "James", 20);

// Solution:

// Pure functions:
var getUser = function(arr, name) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i].name.toLowerCase() === name.toLowerCase()) {
            return arr[i]; // returns an object / user
        }
    }
    return null;
};

var updateScore = function(user, amt) {
    if(user) {
        user.score += amt;
        return user;
    }
};

var updateTries = function(user, tries) {
    if(user) {
        user.tries += tries;
        return user;
    }
};

// side-effect specific call
// Modifies data
var storeUser = function(arr, user) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i].name.toLowerCase() === user.name.toLowerCase()) {
            arr[i] = user;
            break;
        }
    }
};

let usr = getUser(users, "James");
let usr1 = updateScore(usr, 50);
let usr2 = updateTries(usr1, 120);
storeUser(users, usr2);

/*
Arrays in JS have find() method - from functional perspective, it will be more declarative

- we retreive the object we are looking for
- takes in a function to find the element, returns true if it finds the element
- then find will pickup the element and return that back 
*/

var getUser1 = function(arr, name) {
    // for(let i=0; i<arr.length; i++) {
    //     if(arr[i].name.toLowerCase() === name.toLowerCase()) {
    //         return arr[i]; // returns an object / user
    //     }
    // }
    // return null;
    
    // obj will contain user as it goes through users
    let targetObj = arr.find(obj => obj.name.toLowerCase() === name.toLowerCase());
    return targetObj;
};