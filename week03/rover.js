/********* Rover the Robot answers: *********/

/****** Introduction ******/
/*1. Hello! I'm Rover, I'm a robot. You can program me through JavaScript. I understand two commands, which are JavaScript functions:
	•	move()
	•	turn(direction)
The second function takes one argument, which should be the direction to turn to ('left' or 'right').
I cannot walk through obstacles (trees, water). Can you get me to the flag?
Tips:
	•	Press PLAY to see me move forward and turn to the right.
	•	If you want to restart, use the RESTART button.
	•	If your code contains an error, red circles will indicate where the error is. Click on it to get details.
	•	To reset the code to the original code shown below, use the RESET button above.*/
•
// You can modify this code to instruct Rover:

move();
turn('right');
move();
move();
move();
turn('left');
move();
move();


/****** Loops ******/
/* 1. Alright, that was easy. Now I seem to be lost in an apple orchard (because I love apples). Of course, you can type out move() seven times, but the point of writing code is to not repeat yourself too often.
I've written a for loop to make my own life easier. A for loop looks like this:
for (let i = 0; i < N; i++) {
  doSomething();
}
In a later level, we'll take a closer look at the for loop, but for now remember that the value of N above determines how often the code doSomething() is repeated.
The for loop doesn't take me far enough. Can you change the code so that I reach the flag? */

for (let i = 0; i < 7; i++) {
    move();
}

2. Can you include two 
for  loops in your program to get me to the flag ?

    for (let i = 0; i < 4; i++) {
        move();
    }
turn('right');
move();
move();
turn('right');
for (let i = 0; i < 4; i++) {
    move();
}

/****** Variables  ******/
/*1. Let 's try something new. A part of the code has already been written, and you have to help out to make it work.
In the code, two variables are used:  stepsDown  and  stepsLeft, but they don 't have the correct values. Write code to give the variables the right values so that the code works.
Read up on variables on  this MDN article.
Tip: •If you want to see  all  JavaScripts steps that are executed, not only the ones that move the robot, activate the VERBOSE
switch at the top right of the screen.*/


// ---- You cannot modify these lines
let stepsDown = 3;
let stepsLeft = 0;
// ++++

let stepsDown = 2;
let stepsLeft = 1;

// ---- You cannot modify these lines
for (let i = 0; i < stepsDown; i++) {
    move();
}
turn('right');
for (let i = 0; i < stepsLeft; i++) {
    move()
}
// ++++

/* 2. Just like in the last level, two variables are used by the code that is already written.It 's your job to declare (create) those variables.
Look at the code below, figure out which variables you will have to declare, and what their values should be.
Read up on variables on  this MDN article. */

// Declare your variables here:
const stepsUp = 3;
const stepsRight = 3;

// ---- You cannot modify these lines

for (let i = 0; i < stepsUp; i++) {
    move();
}
turn('right');
for (let i = 0; i < stepsRight; i++) {
    move();
}

// ++++

/* 3. Oh hello!What is this, a lock ? And a key ? Very cliché!
    As you probably guessed, you need to key to open the lock.So, move to the key, and pick it up with the command  pickUp().This
function  returns the key, so you will have to write it like 
const key = pickUp();.
When you arrive at the lock, you can unlock it by typing  unlock(key); 
when facing the lock. */


move();
const key = pickUp();
move();
turn('right');
unlock(key);
move();
move();
move();

/* 4. So, a key is actually a variable.When you call  unlock(key); 
you use the key to unlock the lock.
The lock can only be unlocked with a specific value.In the previous level, the key had the value  true  and the door could be unlocked with the value  true, so using  unlock(key); 
worked in the previous level.(If you go back, to the previous level, you 'll see that unlock(true); would have also worked).
The lock in this level is a bit more difficult.They key in this level is a  number, and the lock can also be unlocked with a  number.However, the number to unlock the lock is  double  the number of the key.So,
if the key is  8, the lock can be unlocked with the number  16. How would you write your code to unlock the lock in this level ?
Tip : •Click on the lock to see how you can unlock it, given the value of the key. */

move();
const key = pickUp();
move();
turn('right');
unlock(2 * key);
move();
move();
move();

/* 5. This time, we're not going to reveal what you have to do with the key to unlock the lock. Click on the lock to reveal how the lock works, and try to figure out how what to do with the key to unlock the lock. */

move();
const key = pickUp();
move();
turn('right');
unlock(-1 * key);
move();
move();
move();


/* 6. This level has two locks! Figure out how you can unlock them.
As you can see from the unlock schema of the the lower lock, it accepts a boolean, and not a number. Can you figure out what to do with the key to unlock the door? */

move();
const key = pickUp();
move();
turn('right');
unlock(Math.pow(key, 3));
move();
unlock(key < 6);
move();
move();


/* 7. In this level, the key is a string, and there are again two locks.
Each lock works differently, so click on them to see what you have to do with the key to unlock them. */

move();
const key = pickUp();
move();
turn('right');
unlock(key + ',' + key);
move();
unlock(key.length);
move();
move();

/*8. Heyy a rainbow key! Rainbow keys can be anything: booleans, numbers, strings, or even null.
Click on the rainbow locks to see what they accept for each key value, and try to satisfy both locks. */


move();
var key = pickUp();
move();
turn('right');
unlock(typeof key);
move();

if (key == null) {
    key = "null";
} else if (key == true) {
    key = 1;
} else if (key == false) {
    key = 0;
} else if (typeof key == "string") {
    key = key.length;
} else if (typeof key == "number" && key % 2 == 0) {
    key = true;
} else if (typeof key == "number" && key % 2 !== 0) {
    key = false;
}

unlock(key);
move();
move();



/****** Boolean logic  ******/
/* 1. In this level, there are two keys and one lock. The lock can be unlocked using a combination of both keys. */

move();
const key1 = pickUp();
move();
const key2 = pickUp();
unlock(key1 && key2);
move();
move();

/* 2. One key, two locks. If you look at the locks, you see that one lock opens with a key smaller than 5, and the other lock opens with a key greater than or equal to 5.
Note that the cross in the locking schemes means that you cannot open this door at all with this key.
You should decide which path to take based on the value of your key!
If you don't understand the locks, make sure you've completed the Variables chapter! */


move();
const key = pickUp();

if (key < 6) {
    var dir1 = 'right';
    var dir2 = 'left';
} else {
    var dir1 = 'left';
    var dir2 = 'right';
}

move();
turn(dir2);
move();
turn(dir1);
unlock(key);
move();
move();
turn(dir1);
move();

/* Note: It just has one star, haven’t figured out what the program wants yet… */

/****** Functions ******/
/*1. In case I haven't mentioned it before, I really like apples. Let's take a small break and eat some. No complicated stuff yet, just make me eat the apples and get to the flag.
You do not have to use pickUp for me to eat apples! I eat them anyway. That's just how much I like them. */

turn('right');
move();
turn('left');
move();
move();
move();
move();
turn('left');
move();

/* 2. This time, there are four apples, but they're all in the same place.
I can only eat one apple a time when I move to a square with an apple. So, to eat them all, I have to move away, turn around and come back.
Can you help me by writing a function that does exactly this?
Read about functions in this MDN article.*/


function moveAwayAndComeBack() {
    // Fill in your function here.
    turn('left');
    move();
    turn('right');
    turn('right');
    move();
    turn('left');
}

// ---- You cannot modify these lines
move();
move();
for (let i = 0; i < 3; i++) {
    moveAwayAndComeBack();
}
move();
move();
// ++++

/* 3. Let's play some chess. The knight in chess moves two places ahead, and then one to the left or right.
Write a function called knightMove below which has a parameter called direction. The function should make me do a knight's move in the specified direction. If you do it right, the program will bring me to the flag.
Note that I have to face the same way after the knight move as before the knight move, or it won't work.
If you're lost, here's that MDN article about functions.*/

// Write your function here:
function knightMove(direction) {
    move();
    move();
    turn(direction);
    move();
    turn(direction == 'right' ? 'left' : 'right');

}
// ---- You cannot modify these lines

knightMove('right');
turn('right');
knightMove('left');
knightMove('right');
knightMove('left');
turn('left');
knightMove('left');
knightMove('right');

// ++++


/****** Arrays ******/

/*1. In this level, part of the program has been written. This time, you should modify some arrays to get me to the flag.
There are two arrays. I will use stepsUp to go up a few steps, and then stepsRight to go right a few steps, until both arrays are empty.
So, the way it's set up now, I will:
	•	Go up 1 step
	•	Go right 1 step
	•	Go up 4 steps
Can you modify the arrays so that I will arrive at the flag? Note, you cannot change the variables as they're const, so you have to modify the arrays themselves.
Read about arrays in this MDN article.
Tips:
	•	Don't worry about the code that is written already. You may try to follow it, but the point is to modify the arrays!*/


// ---- You cannot modify this code
const stepsUp = [1, 4];
const stepsRight = [1];
// ++++

// Modify the arrays here.
stepsUp.pop();
stepsUp.push(2, 2);
stepsRight.unshift(3);
// ---- You cannot modify this code

while (stepsUp.length > 0 || stepsRight.length > 0) {
    const up = stepsUp.shift();
    if (up != null) { moveN(up); }
    turn('right');

    const right = stepsRight.shift();
    if (right != null) { moveN(right); }
    turn('left');
}

function moveN(n) {
    for (let i = 0; i < n; i++) {
        move();
    }
}

// ++++


/*2. Can you modify the arrays again to make me reach the flag?
As a reminder, here is that MDN article on arrays.*/

// ---- You cannot modify this code
const stepsUp = [1, 4, 5, 3, 1];
const stepsRight = [3, 2, 5, 2];
// ++++

// Modify the arrays here.
stepsUp.splice(1, 2);
stepsRight.shift();
stepsRight.splice(1, 1);


// ---- You cannot modify this code

while (stepsUp.length > 0 || stepsRight.length > 0) {
    const up = stepsUp.shift();
    if (up != null) { moveN(up); }
    turn('right');

    const right = stepsRight.shift();
    if (right != null) { moveN(right); }
    turn('left');
}

function moveN(n) {
    for (let i = 0; i < n; i++) {
        move();
    }
}

// ++++


/****** JSON ******/

/*1. Oh no, it's dark now! I cannot see the obstacles, but they're still there. Fortunately, someone has given me the instructions to get to the flag.
Above the code you see const instructions = [(...)]. You cannot see the contents of the instructions, but they're there.
The instructions themselves are all functions, so you can just call them, e.g. this will execute the first instruction:
const firstInstruction = instructions[0];
firstInstruction();
Tips:
	•	Use the for ... of loop, or the .forEach function with an arrow function or to iterate through the instructions!*/

// ---- You cannot modify these lines
const instructions = [ /*<*/ () => turn('right'), move, move, move, () => turn('left'), move, move, () => turn('left'), move, () => turn('right'), move, () => turn('left'), move, move, () => turn('left'), move /*>*/ ];
// ++++

// Write your code here:



instructions.forEach(function(element) {
    element();
});

/* for(const instruction of instructions){

 instruction();
  
} */

/*for(var i = 0; i < instructions.length; i++){
 const instruction = instructions[i];
  instruction();
}*/


/*2. This time, the instructions look a bit different. The array contains elements which are any of the following:
	•	The string 'move'
	•	An object {turn: 'left'} or {turn: 'right'}
The array also contains other (invalid) instructions. These can be anything. Invalid instructions should be ignored!
Modify your algorithm from level 1 to understand these new instructions.*/

// ---- You cannot modify these lines
const instructions = [ /*<*/ 'move', { turn: 'right' }, 'move', 'move', 'move', 'move', { turn: 'left' }, 'move', 'move', 'move', { turn: 'left' }, 'move' /*>*/ ];
// ++++

// Write your code here:

instructions.forEach(function(element) {
    if (element === "move") {

        move();
    } else if (typeof element === "object") {

        if (element.turn === 'right') {
            turn('right');
        } else {
            turn('left');
        }
    }


});

/* for (element of instructions) {
        if(typeof element === "string"){ 
           
           move();
           } else if(typeof element === "object"){
          
           if(element.turn === 'right'){
              turn('right');
              } else {
              turn('left');
              }
        }
}*/

/*
for (let i = 0; i < instructions.length; i++) {
  const instruction = instructions[i];
  
 // if(typeof instruction === 'string' || typeof instruction === 'object'){
  instruction();
 // }
 
} */


/****** Advanced Loops ******/

/* 1. Apart from move() and turn(direction), there is one more function you can use, called isFinished(). It tells you when I've reached the flag.
Use a while loop to make me move forward until I've reached the flag. */

while (!isFinished()) {
    move()
}