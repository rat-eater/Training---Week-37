/*
    Task: A
    Write code that prints the sentence "Debugging is like being a detective in a crime drama where you are also the murderer" 
    100 times. 
*/
console.log("Task: A");

for (let i = 0; i < 100; i++) {
    console.log("Debugging is like being a detective in a crime drama where you are also the murderer");
}


/*
    Task: B
    The following code is incorrect, can you fix the errors?
    This one isn't that simple, there are syntax errors and logical errors.
    Try to think about what we are trying to achieve.
*/
console.log("Task: B");

const max = 99;
for (let index = max; index > 0; index--) { // Fixed syntax errors: removed semicolon and changed loop logic
    console.log(index + " bottles of soda on the shelf");
    console.log(index + " bottles of soda on the shelf");

    console.log(
        "Take one down, pass it around. " + (index - 1) + " bottles of soda on the shelf"
    );
    console.log("");
}

console.log("No more bottles of soda on the shelf");


/*
    Task: C
    Declare a variable for gravity, a variable for pi, and a variable for the number of people in a room. 
*/
console.log("Task: C");

const gravity = 9.81; // Earth's gravity in m/s^2
const pi = 3.14159; // Approximation of pi
let numberOfPeople = 5; // Example number of people


/*
    Task: D
    Create a function that adds two numbers, the function should be named add
*/
console.log("Task: D");

// write your function here.
function add(a, b) {
    return a + b;
}

console.log("3 + 6 = " + add(3, 6));
console.log("5673 + 234 = " + add(5673, 234));

/*
    Task: E
    Use the variable people from the example and print the names in reverse order (using a loop)
    NB: You should not change people, just use its contents.
*/
console.log("Task: E");

for (let index = people.length - 1; index >= 0; index--) {
    console.log(people[index]);
}


/*
    Task: F
    Declare a variable for a list of phone numbers. Your list should have at least 3 numbers. 
*/
console.log("Task: F");

const phoneNumbers = ["123-456-7890", "234-567-8901", "345-678-9012"];


/*
    Task: G
    Print only the last phone number in your list from Task F
*/
console.log("Task: G");

console.log(phoneNumbers[phoneNumbers.length - 1]);


/*
    Task: H
    Print only the last names of the people in the list, using a loop.
*/
console.log("Task: H");

let peopleNames = [["Christian", "Simonsen"], ["Tony", "Bergholtz"]];

for (let i = 0; i < peopleNames.length; i++) {
    console.log(peopleNames[i][1]); // Access the last name which is the second element in the inner array
}
