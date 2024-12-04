"use strict";
import { initPrintOut, printOut, newLine, NEWLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

/*Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows.*/

const counterTo_1 = 10;
const counterTo_2 = 1;
let txtPrintValue = "";
let txtPrintValue_2 = "";

for ( let counter_1 = 1, counter_2 = 10; counter_1 <= counterTo_1, counter_2 >= counterTo_2; counter_1++, counter_2--){
    txtPrintValue += " " + counter_1.toString();
    txtPrintValue_2 += " " + counter_2.toString();
}
printOut(txtPrintValue + newLine);
printOut(txtPrintValue_2);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

/*Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress.*/

let number = Math.floor(Math.random()*60)+1;
let count = 0;
const correctNumber = 58;

while (number !== correctNumber){
    number = Math.floor(Math.random()*60)+1;
    count++;
} 
printOut("You have guessed the number! " + number);
printOut("It took " + count + " guesses!")

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time*/

let answerNumber = Math.floor(Math.random()*1000000)+1;
const guessNumber = 67535;
let startTime = Date.now();
let count_1 = 0;

while (answerNumber !== guessNumber){
    answerNumber = Math.floor(Math.random()*1000000)+1;
    count_1++;
} 

const endTime = Date.now() - startTime;
printOut("Guess the number! The number is: " + guessNumber.toString());
printOut("It took " + count_1 + " guesses")
printOut("It took " + endTime + " ms for the computer to guess the number!" );

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
○ HINT: A prime number is any natural number greater than 1 that is only divisible by itself and
1. The number 1 is not a prime. (See Wikipedia on primes or ask your AI).*/

printOut(newLine);
// all prime numbers 1 > x > 200, prime number 

 for (let num = 2; num < 200; num++) {
    let isPrime = true;
      
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        isPrime = false;
        break;
    }
}
      
    if (isPrime) {
        printOut("Primenumber is: " + num); // Output the prime number
    }
 }



printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.
○ Hint: Use what we call nested loops. This is a "for" loop within another "for" loop.
Use the provided printOut function to print each row with its sets of columns; remember to place this in
the right level of the nested for loops. The output should look like this:
K1R1 K2R1 K3R1 K4R1 K5R1 K6R1 K7R1 K8R1 K9R1
K1R2 K2R2 K3R2 K4R2 K5R2 K6R2 K7R2 K8R2 K9R2
K1R3 K2R3 K3R3 K4R3 K5R3 K6R3 K7R3 K8R3 K9R3
K1R4 K2R4 K3R4 K4R4 K5R4 K6R4 K7R4 K8R4 K9R4
K1R5 K2R5 K3R5 K4R5 K5R5 K6R5 K7R5 K8R5 K9R5
K1R6 K2R6 K3R6 K4R6 K5R6 K6R6 K7R6 K8R6 K9R6
K1R7 K2R7 K3R7 K4R7 K5R7 K6R7 K7R7 K8R7 K9R7*/

let row = "";  

for (let R = 1; R <= 7; R++){
    row += newLine;
    for ( let K = 1; K <= 9; K++)
    {
    row += "K" + K + "R" + R + " ";
    }
}

printOut(row + "");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

/*Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.
Hint for Success: If you successfully complete the sorting challenge, you'll unlock a valuable hint for Part
9 of "DAT101: Mandatory assignment 4.1" that will make it easier to solve. The learning outcomes remain
the same, but this hint will give you a head start!*/

let student_1 = (Math.round(Math.random()*236)+1)/236*100;
let student_2 = (Math.round(Math.random()*236)+1)/236*100;
let student_3 = (Math.round(Math.random()*236)+1)/236*100;
let student_4 = (Math.round(Math.random()*236)+1)/236*100;
let student_5 = (Math.round(Math.random()*236)+1)/236*100;

printOut("Student 1 grade: " + student_1.toFixed(0) + ", Student 2 grade: " + student_2.toFixed(0) + ", Student 3 grade: " + student_3.toFixed(0) + ", Student 4 grade: " + student_4.toFixed(0) + ", Student 5 grade: " + student_5.toFixed(0))

printOut(newLine);

if (student_1 <= 40){
    printOut("student 1: You got an F!");
    }
    else if (student_1 <= 52){
        printOut("student 1: You got an E");
    }
    else if (student_1 <= 64){
        printOut("student 1: You got a D");
    }
    else if (student_1 <= 76){
        printOut("student 1: You got a C");
    }
    else if (student_1 <= 88){
    printOut("student 1: You got a B");

    }else{
    printOut("student 1: You got an A");
    }

if (student_2 <= 40){
    printOut("student 2: You got an F!");
    }
    else if (student_2 <= 52){
        printOut("student 2: You got an E");
    }
    else if (student_2 <= 64){
        printOut("student 2: You got a D");
    }
    else if (student_2 <= 76){
        printOut("student 2: You got a C");
    }
    else if (student_2 <= 88){
    printOut("student 2: You got a B");

    }else{
    printOut("student 2: You got an A");
    }

if (student_3 <= 40){
    printOut("student 3: You got an F!");
    }
    else if (student_3 <= 52){
        printOut("student 3: You got an E");
    }
    else if (student_3 <= 64){
        printOut("student 3: You got a D");
    }
    else if (student_3 <= 76){
        printOut("student 3: You got a C");
    }
    else if (student_3 <= 88){
    printOut("student 3: You got a B");

    }else{
    printOut("student 3: You got an A");
    }
    
if (student_4 <= 40){
    printOut("student 4: You got an F!");
    }
    else if (student_4 <= 52){
        printOut("student 4: You got an E");
    }
    else if (student_4 <= 64){
        printOut("student 4: You got a D");
    }
    else if (student_4 <= 76){
        printOut("student 4: You got a C");
    }
    else if (student_4 <= 88){
    printOut("student 4: You got a B");

    }else{
    printOut("student 4: You got an A");
    }

if (student_5 <= 40){
    printOut("student 5: You got an F!");
    }
    else if (student_5 <= 52){
        printOut("student 5: You got an E");
    }
    else if (student_5 <= 64){
        printOut("student 5: You got a D");
    }
    else if (student_5 <= 76){
        printOut("student 5: You got a C");
    }
    else if (student_5 <= 88){
    printOut("student 5: You got a B");

    }else{
    printOut("student 5: You got an A");
    }

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

/*Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)*/

const d1 = Math.ceil(Math.random()*6);
const d2 = Math.ceil(Math.random()*6);
const d3 = Math.ceil(Math.random()*6);
const d4 = Math.ceil(Math.random()*6);
const d5 = Math.ceil(Math.random()*6);
const d6 = Math.ceil(Math.random()*6);

let diceThrow = "";
diceThrow += d1.toString() + ",";
diceThrow += d2.toString() + ",";
diceThrow += d3.toString() + ",";
diceThrow += d4.toString() + ",";
diceThrow += d5.toString() + ",";
diceThrow += d6.toString();

let count1 = (diceThrow.match(/1/g) || "").length;
let count2 = (diceThrow.match(/2/g) || "").length;
let count3 = (diceThrow.match(/3/g) || "").length;
let count4 = (diceThrow.match(/4/g) || "").length;
let count5 = (diceThrow.match(/5/g) || "").length;
let count6 = (diceThrow.match(/6/g) || "").length;

let diceCount = "";
diceCount += count1.toString() + ",";
diceCount += count2.toString() + ",";
diceCount += count3.toString() + ",";
diceCount += count4.toString() + ",";
diceCount += count5.toString() + ",";
diceCount += count6.toString();

let counter_straight = 0;

printOut("Dicethrow: " + diceThrow); //The dice numbers
printOut("DiceCount: " + diceCount); //The amount of each dice numbers that was thrown

printOut("It took " + counter_straight + " throws to get straight");
//full straight





// 3 pairs

// 2 of a kind and 4 of a kind

//All the same

const equals1 = (diceCount.match(/1/g) || "").length;
const equals6 = (diceCount.match(/6/g) || "").length;

printOut("Equals 1: " + equals1.toString());
printOut("equals 6: " + equals6.toString());

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
