// Load the FP build for immutable auto-curried iterative-first data-last methods.
// var fp = require('lodash/fp');
// https://cdnjs.com/libraries/lodash.js

/*
Immutable - functions do not mutate any of their parameters.
Auto curried - if you pass less arguments to a function than what a function expects, it will return another function, and that function will expect other arguments.

A lot of functions you pass to a function, to tell it what to do with the data.
Iterative first - function is passed in first, then the data.
Data last -

Read documentation for Lodash - https://lodash.com/docs/4.17.15
*/

let sum = _.add(5, 2);
// auto curry
let add5 = _.add(5); // returns a function - that will add 5 to anything

// methods
const addOne = _.map((num) => num+1);
const multBy2 = _.map((num) => num*2);
const removedNumsOver100 = _.filter((num) => num <= 100); // num <= 100 returns true/false which then gets populated to result
const sumAllNumbers = _.reduce((sum, num) => sum + num)(0); // two values are passed - 1) curry method :- accumulator, num; returns sum+num to sum. 2) init value for accumulator


const logAndReturn = function(data) {
    console.log(data);
    return data;
}

// flow and flow write
const processNumbers = _.pipe(addOne, multBy2, removedNumsOver100, logAndReturn, sumAllNumbers, console.log);

// Exercises using lodash:
const scores = [50, 40, 30, 65, -1];
const boostScoresBy2 = _.map((num) => (num<45) ? num*2 : num);
const removeScoresAbove100 = _.filter((num) => num <= 100);
const removeScoresBelow0 = _.filter((num) => num > 0);
const removeBoth0AndOver100 = _.pipe(removeScoresAbove100, removeScoresBelow0);
const doAllModifications = _.pipe(boostScoresBy2, removeBoth0AndOver100);

// Create a function that accepts an array and returns the average with all modifications
const computeAverage = _.curry(_.mean);

const doAll = _.pipe(doAllModifications, computeAverage);