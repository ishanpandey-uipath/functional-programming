/*
JS program stores data in variables and objects.
Contents of these storage locations while program is running at any given moment is called state.


Avoiding shared state - 
1) Using clone objects so that any modifications dont do on the original reference passed to a function
2) Objects in JS are mutable. Meaning they can be changed (property, order, any other value). They cannot be reassigned.

In JS, objects are passed by reference.
*/

const arr = [1, 2, 3, 4];
arr.sort();
console.log(arr);

const newNums = function(arr1) {
    return arr1.sort();
};

/*
Cloning Objects:
- to prevent mutating object, we clone the object.

When you have children objects inside an object, then it doesnt have cloned.
Solution:
Parse an Object to JSON text string, and then parse it back to json object to new object. That will allow you to clone the object.
*/

let obj = {
    name: "Ishan",
    age: 22,
    questions: [
        {
            question: "How are you",
            value: "good"
        }
    ]
}

let obj2 = Object.assign({}, obj); // {} into which obj will be copied to

let obj3 = JSON.parse(JSON.stringify(obj)); //  better method to clone

let arr2 = [1, 4, 3, 4];
Object.freeze(arr2);
const cloneObj = function(obj) {
    return JSON.parse(JSON.stringify(obj));
};

let arr3 = cloneObj(arr2).sort();

/*

In the previous topic we looked at using Object.assign() to clone an object. This only does a shallow clone as we demonstrated. If we only need a shallow clone of an object, we can also use the spread operator.

The spread operator consists of three dots ... . This operator has several applications, but one application is shallow cloning. For example, if we have the following array:

const arr = [5, 6, 9, 10, 12, 3, 4];

and we would like to clone it, we can do it like this:

const newArray = [...arr];

The spread operator spreads out the elements of the arr array, and then we include them in a new array by surrounding the elements in square brackets.

If we have the following object:

const obj = {
  name: 'Steven',
  eyes: 'blue'
};
we can clone it like this:

const newObj = {...obj};

Once again the spread operator opens up the key value pairs in the object and then we place them in a new object using the curly braces.

So the spread operator is another way to do shallow cloning.

However, it is important to remember that the JSON.parse(JSON.stringify()) method is more flexible and will make sure to do deep cloning, so I usually prefer to use that method.

*/