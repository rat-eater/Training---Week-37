Tasks explanations:

Task: A

for loop: This loop will run 100 times.
let i = 0 initializes a counter variable i to 0.
i < 100 is the condition that must be true for the loop to continue. The loop stops once i reaches 100.
i++ increments i by 1 after each iteration.
console.log(...): Prints the specified string to the console each time the loop runs.

Task: B

Errors in the original code:
index--: This was decrementing index in the initialization step which doesn't make sense.
; after for loop: Terminates the loop, causing it not to execute properly.
Corrections:
let index = max: Initialize the index with max (99), to start counting down from 99.
index > 0: The loop continues as long as index is greater than 0.
index--: Decrement index by 1 in each iteration.
Removed the unnecessary semicolon after the for statement.

Task: C

const: Declares constants that won't change (gravity and pi).
let: Declares a variable (numberOfPeople) that can change if needed.

Task: D

function add(a, b): Defines a function named add that takes two parameters a and b.
return a + b;: Returns the sum of a and b.
Usage:


console.log("3 + 6 = " + add(3, 6));
console.log("5673 + 234 = " + add(5673, 234));

console.log(...): Prints the result of the addition to the console.

Task: E

people.length - 1: Initializes index to the last position of the people array.
index >= 0: The loop continues as long as index is greater than or equal to 0.
index--: Decrements index by 1 in each iteration, moving backward through the array.
console.log(people[index]): Prints each person's name in reverse order.

Task: F

const: Declares a constant array named phoneNumbers.
["..."]: Initializes the array with 3 phone numbers.

Task: G

phoneNumbers.length - 1: Calculates the index of the last element in the array.
console.log(...): Prints the last phone number to the console.

Task: H

peopleNames: A nested array where each inner array represents a person's first and last name.
for loop: Iterates through each element (each person's name).
peopleNames[i][1]: Accesses the second element of each inner array (the last name).
console.log(...): Prints each last name to the console.
Summary
Each task focuses on a specific programming concept:

Loops (for): To repeat actions multiple times.
Arrays: To store and manipulate multiple values.
Functions: To encapsulate and reuse code.
Printing to the console (console.log): To display output.
