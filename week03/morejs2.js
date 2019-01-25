//More JavaScript 🎉 exercises 12 to 17


//12. Create an empty object.
let solo = {};

//13. Create an object that contains the teachers that you have had so far for the different modules.
let teacher = {
    "name of teachers": "Stephen, Robert & Baraa"
};


/// We can also create one object for each teacher with their corresponding language.
/// In this case we are inheriting from an object called Teacher with a default value for name:

/// ****** Strats here ****** ///
//let Teacher = {
//    name: 'Hack Your Future', // Default value of properties
//};

/// Create new teacher type called stephen
//let stephen = Object.create(Teacher);
//stephen.name = 'Stephen';
//stephen.class = "JavaScript"
//console.log(stephen)

/// Create new teacher type called robert
//let robert = Object.create(Teacher);
//robert.name = 'Robert';
//robert.class = "Git"
//console.log(robert)

/// Create new teacher type called baraa
//let baraa = Object.create(Teacher);
//baraa.name = 'Baraa';
//baraa.class = "HTML & CSS"
//console.log(baraa)

/// ****** Ends here ****** ///


//14. Add a property to the object you just created that contains the languages that they have taught you.
teacher.language = "JavaScript, Git, HTML & CSS";
console.log(teacher);



//15. Write some code to test two arrays for equality using == and ===. Test the following:
// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;
//What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
//Don't cheat! Seriously - try it first.
//Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. Press the Run button in the upper right corner to run the code.
//More insights from this Stack Overflow question.
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log("Only sorting the array and comparing may give accurate result, so the results we get without sorting give inaccurate results:");
if (x == y) {
    console.log("x == y or true");
} else {
    console.log("x != y or false");
}

if (x === y) {
    console.log("x === y or true");
} else {
    console.log("x !== y or false");
}

if (z == y) {
    console.log("z == y or true");
} else {
    console.log("z != y or false");
}

if (z == x) {
    console.log("z == x or true");
} else {
    console.log("z != x or false");
}

let equality = (x.length == y.length) && x.every(function(element, index) {
    return element === y[index];
});
console.log("By sorting through the arrays, we get that x === y is: " + equality);

let equality2 = (x.length == y.length) && x.every(function(element, index) {
    return element == y[index];
});
console.log("By sorting through the arrays, we get that x == y is: " + equality2);


let equality3 = (z.length == y.length) && z.every(function(element, index) {
    return element == y[index];
});
console.log("By sorting through the arrays, we get that z == y is: " + equality3);


let equality4 = (z.length == x.length) && z.every(function(element, index) {
    return element == x[index];
});
console.log("By sorting through the arrays, we get that z == x is: " + equality4);




//16. Take a look at the following code:
// let o1 = { foo: "bar" };
// let o2 = { foo: "bar" };
// let o3 = o2;
//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
//Does the order that you assign (o3 = o2 or o2 = o3) matter?
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;


console.log(o1);

console.log(o2);

console.log(o3);

o2.fighter = "cafe";
o1.fai = "ogre";

console.log(o1);

console.log(o2);

console.log(o3);

let compare1 = o2 === o3;
let compare2 = o1 === o3;
console.log("If we change o2, do we also change o3? " + compare1);
console.log("If we change o1, do we also change o3? " + compare2);



//17. What does the following code return? (And why?)
// let bar = 42;
// typeof typeof bar;
//‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.

let bar = 42;
typeof typeof bar;
console.log("bar is equal to: " + bar);
console.log("The type of bar is: " + typeof bar);
console.log("And the type of a string that says \"number\" is then: " + typeof typeof bar);