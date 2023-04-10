const assertEqual = require('../assertEqual');
const head = require('../head')

// Test Assertions
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3,2,1]), 6);
assertEqual(head([]), 10);