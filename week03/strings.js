// This is a javascript file that answers to Homework Week 3 of JavaScript, point 1. Strings!
//Consider the following string:
//let myString = "hello,this,is,a,difficult,to,read,sentence";
//1.1 Add the string to your file and log it.
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
//1.2 Log the length of myString.
console.log("The length of my string is: " + myString.length);
//1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
myString = myString.replace(/,/g, ' ');
//1.4 Log myString to see if you succeeded.
console.log(myString);