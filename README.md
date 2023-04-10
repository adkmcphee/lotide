# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adkmcphee/lotide`

**Require it:**

`const _ = require('@adkmcphee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: Returns the first element of a given array.
* tail: Returns the last element of a given array.
* middle: Returns the middle element of a given array. Cases for odd and even length arrays.
* eqArrays: Tests if two arrays are the same.
* assertEqual: Tests if the expected output matches the provided output.
* assertArraysEqual: Checks if two given arrays are equal.
* assertObjectsEqual: Checks if two given objects are equal.
* countLetters: Returns an object with the occurances of a letter from a given string.
* countOnly: Returns the occurances of values from a given object.
* eqObjects: Tests if two given objects are equal.
* findKey: Returns a key associated with the given object and callback function.
* findKeyByValue: Returns a key associated with the given object.
* map: Return an array given an array and a callback function.
* takeUntil: Return all elements of a given array with a callback function.
* without: Returns an array with selected elements removed.
* letterPositions: Returns an object with an array of positions for idenfitied letter in a string.