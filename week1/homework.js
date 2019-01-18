// log statements
console.log("Hello, world!"); // english
console.log("¡Holla, mundo!"); // spanish
console.log("Hallo Welt!"); // german
console.log("Hej, världen!"); // swedish

// variables
let x;
console.log("The value of my variable x will be: undefined");
console.log("Value of x: " + x);
x = 1945;
console.log("The value of my x will be: an assigned integer, in this case: 1945");
console.log("Value of x: " + x);
let y = "Cowgirls in the forest";
console.log("The value of my string will be: Cowgirls in the forest");
console.log("Value of x: " + y);
y = "Winds in the desert";
console.log("The value of my string will be: an assigned string, in this case: Winds in the desert");
console.log("Value of y: " + y);

// round up and highest values
let z = 7.25;
console.log("Value of z: " + z);
let a = Math.round(z);
console.log("Value of a: " + a);
h = Math.max(z, a);
console.log("The highest value between z and a is: " + h);

// arrays
let things = [];
console.log("The value of my array will be undefined");
console.log("The value of my array is: " + things);
let myFavoriteAnimals = ["cat", "panther", "lynx", "bat"];
console.log("My favorite animals are: " + myFavoriteAnimals);
myFavoriteAnimals.push("baby pig");
console.log("My favorite animals are: " + myFavoriteAnimals);

// more strings
let myString = "this is a test";
console.log(myString);
console.log("The length of my string is: " + myString.length);

// types of variables
let animal = "elephant";
let accept = true;
let age = 20;
let myObject = { me: "too", save: "me" };
let tito = "deer";
console.log("The value of animal is: " + animal);
console.log("The value of tito is: " + tito);
console.log("The value of accept is: " + accept);
console.log("The value of age is: " + age);
console.log("The value of myObject is: " + myObject);
console.log("The type of my variable animal will be string");
console.log("The type of my variable tito will be string");
console.log("The type of my variable accept will be boolean");
console.log("The type of my variable age will be number");
console.log("The type of my variable myObject will be object");
console.log("The type of variable of animal is: " + typeof animal);
console.log("The type of variable of tito is: " + typeof tito);
console.log("The type of variable of accept is: " + typeof accept);
console.log("The type of variable of age is: " + typeof age);
console.log("The type of variable of myObject is: " + typeof myObject);
if (typeof animal == typeof accept) {
    console.log('animal and accept are the same type');
} else {
    console.log('animal and accept are NOT the same type');
}
if (typeof accept == typeof age) {
    console.log('accept and age are the same type');
} else {
    console.log('accept and age are NOT the same type');
}
if (typeof age == typeof myObject) {
    console.log('age and myObject are the same type');
} else {
    console.log('age and myObject are NOT the same type');
}
if (typeof myObject == typeof animal) {
    console.log('myObject and animal are the same type');
} else {
    console.log('myObject and animal are NOT the same type');
}
if (typeof tito == typeof animal) {
    console.log('But tito and animal are the same type');
} else {
    console.log('tito and animal are NOT the same type');
}

// %
x = 7;
console.log("The value of x is: " + x);
x = x % 3;
console.log("But if we look for the remainder when we divide by 3, we find that the new value of x is: " + x);
y = Math.floor(7 / 3);
console.log("This is because the quotient of 7 \/ 3 = : " + y);
console.log("And " + y + " * 3 = " + y * 3);
console.log("So 7 - 6 = : " + x + ", which is the remainder.");

// Storing and comparing in an array
let myMultiArray = ["Towels", 45, true]
console.log("The values in my array are: " + myMultiArray);
console.log("And the types of values in my array are: " + typeof myMultiArray[0] + ", " + typeof myMultiArray[1] + ", and " + typeof myMultiArray[2] + ".");

let infiniteOne = 9 / 0;
let infiniteTwo = 40 / 0;
let infinites = infiniteOne === infiniteTwo;
console.log("infinite One is: " + infiniteOne + ", or 9 \/ 0");
console.log("infinite Two is: " + infiniteTwo + ", or 40 \/ 0");
if (infinites = true) {
    console.log("We can compare infinites!");
} else {
    console.log("We cannot compare infinites!");
}