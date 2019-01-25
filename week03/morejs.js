//More JavaScript 🎉 exercises 1 to 11
//1. Create a function that takes 3 arguments and returns the sum of the these arguments.
function sumNumbers(num1, num2, num3) {
    let total = num1 + num2 + num3;
    console.log(total);
    return total;
}
//sumNumbers(5, 3, 1);



//2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
    console.log("A " + color + " car.");
}
colorCar("blue");



//3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let forest = {
    name: "Black Forest",
    elevation: 1493,
    "has waterfalls": true
};

function valuesInside(object) {
    console.log(object);
}
valuesInside(forest);



//4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
    if (code === 1) {
        console.log("A " + color + " car.");
    } else if (code === 2) {
        console.log("A " + color + " motorbike.");
    }
}
vehicleType("green", 2);


//5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
console.log(3 === 3 ? "yes" : "no");

//6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicleType(color, code, age) {
    if (code === 1) {
        if (age <= 5) {
            console.log("A " + color + " new" + " car.");
        } else {
            console.log("A " + color + " old" + " car.");
        }
    } else if (code === 2) {
        if (age <= 5) {
            console.log("A " + color + " new" + " motorbike.");
        } else {
            console.log("A " + color + " old" + " motorbike.");
        }
    }
}
vehicleType("green", 2, 2);

//7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicles = ["car", "motorbike", "caravan", "bike", "mopped"];

//8. How do you get the third element from that list?
console.log(vehicles[2]);

//9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, type, age) {

    if (age <= 5) {
        console.log("A " + color + " new " + vehicles[type]);
    } else {
        console.log("A " + color + " old " + vehicles[type]);
    }
}

vehicle("green", 3, 1);



//10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
//Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.
let allVehicles = "";
for (let i = 0; i < vehicles.length; i++) {
    if (i === vehicles.length - 1) {
        allVehicles += "and " + vehicles[i] + "s. ";
        break
    };
    allVehicles += vehicles[i] + "s, ";
    // console.log(allVehicles);
};
console.log("Amazing Joe\'s Garage, we service " + allVehicles);


//11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
vehicles.push("skate");
let allVehicles2 = "";
//console.log(vehicles);
for (let i = 0; i < vehicles.length; i++) {
    if (i === vehicles.length - 1) {
        allVehicles2 += "and " + vehicles[i] + "s. ";
        break
    };
    allVehicles2 += vehicles[i] + "s, ";
    // console.log(allVehicles);
};
console.log("Amazing Joe\'s Garage, we service " + allVehicles2);