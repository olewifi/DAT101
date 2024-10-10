"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Part 1: If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8).*/

/* Part 2: Extend part 1 to match this "if" and "else" statement: "If I wake up at exactly 7 o'clock, I can take the bus to
school, otherwise I have to take the car to school". Run the program with different values of wake-up time
(6, 7, 8).*/

/* Part 3: Extend part 2 to expand more options: “If I wake up at exactly 7 o'clock, I can take the bus to school,
otherwise if I wake up exactly at 8 o'clock, I can take the train to school, otherwise I have to take the car to
// school”. Run the program with a different value of wake-up time (7, 8)*/

printOut("Task 1, 2 and 3");

let wakeUpTime = 6;
if ( wakeUpTime == 7) {
  printOut("If I wake up at exactly " + wakeUpTime + " I can take the bus to school.");
  }else if (wakeUpTime == 8){
    printOut("If I wake up at exactly " + wakeUpTime + " I can take the train to school");
  }else{ 
  printOut("If I wake up at " + wakeUpTime + " I have to take the car to school");
} 

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Part 4: Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement.*/

/* Part 5: Change part 4 to print “Positive”, “Negative” or “Zero” accordingly. Run the program with different types of
values for the variable to check the "if" statement.*/ 

let variable = 5;

if(variable > 0 ){
  printOut("The number is positive")
}else if(variable == 0){
  printOut("The number is zero")
}else{
  printOut("The number is negative")
}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

/* Part 6: Imagine you have a photo editing profession. And you have a website where people can upload pictures
for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them.
Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small".*/

let imageSize = Math.floor(Math.random()*8) + 1
if (imageSize >= 4){
  printOut("Thank you!")
}else{
  printOut("The image is too small")
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

/* Part 7: Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large”.*/

let imageSize_1 = Math.floor(Math.random()*8) + 1
if (imageSize_1 >= 4){
  printOut("Thank you!")
}else if(imageSize_1 >= 6){
  printOut("The image is too big")
}else{
  printOut("The image is too small")
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Part 8: Use this code:
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D”*/

/*
const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  if (monthName ) */

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*Expand exercise 8 to print how many days there are in the current month. And do not use date object.*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month.*/
printOut("Replace this with you answer!");
printOut(newLine);
