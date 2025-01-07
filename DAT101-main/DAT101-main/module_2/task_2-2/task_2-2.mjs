"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// 2 + 3*2 - 4*6 = -34 //

printOut("2 +(3(2 - 4))6 =-34");
const answer = 2 + (3*(2 - 4))*6;

printOut("answer =" + answer.toString()); printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres //

const InchInMilli = 25.4;
const MilliInMeter = 1000;
const Metres = 25.34;
const Answer = (Metres*MilliInMeter)/InchInMilli;
const exactAnswer = Answer.toFixed(2);

printOut("25m and 34cm is " + exactAnswer.toString() + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The task must be solved with primitives//

const SecToMinutes = 60;
const HoursInMinutes = 60;
const DaysInMinutes = 1440;
const Part3_Answer = (45/SecToMinutes) + 14 + (12*HoursInMinutes) + (3*DaysInMinutes);

printOut("There are " + Part3_Answer + " minutes in 3 days, 12 hours, 14 minutes and 45 seconds");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The task must be solved with primitives//

const minutes =6322.52;
let part4_calc = minutes / DaysInMinutes;
const days = Math.floor(part4_calc);

part4_calc = part4_calc - days;
part4_calc = part4_calc * 24;
const hours = Math.floor(part4_calc);

part4_calc = part4_calc - hours;
part4_calc = part4_calc * HoursInMinutes;
const minutes2 = Math.floor(part4_calc);

part4_calc = part4_calc - minutes2;
part4_calc = part4_calc * SecToMinutes;
const seconds = Math.floor(part4_calc);

printOut("There  " + days + " days " + hours + " hours " + minutes2 + " minutes " + seconds + " seconds in 6 322.52 minutes")
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars" */

/* 76NOK = 8.6USD == 1USD = 76NOK/8.6 = 8.84 */
let USD = 8.6/76;
let NOK = 76/8.6;
let amountUSD = 54;

printOut(amountUSD + " Dollars are " + Math.round(amountUSD*NOK) + " in NOK");
printOut(Math.round(amountUSD*NOK) + " NOK are " + amountUSD + " Dollars" );

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text. */

const text = "There is much between heaven and earth that we do not understand.";

let length = text.length;
let position19 = text.charAt(19);
let part = text.substr(35, 8);
let earth = text.lastIndexOf("earth")

printOut(text);
printOut("there are " + length + " characters in the sentence");
printOut("Character at position number 19 is: " + position19);
printOut("Number 35 + 8 characters is: " + part);
printOut("The index at which \"earth\" starts at: " + earth );

printOut(newLine); 

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false? */

printOut("Is 5 greater than 3? " + Boolean(5>3));
printOut("Is 7 greater than or equal to 7? " + Boolean(7>=7) );
printOut("Is \"a\" greater than \"b\"? " + Boolean("a">"b"));
printOut("Is \"1\" less than \"a\" " + Boolean("1"<"a"));
printOut("Is \"2500\" less than \"abcd\"? " + Boolean("2500"<"abcd"));
printOut(" \"arne\" is not equal to \"thomas\". " + "The statement is: " + Boolean("arne"!="thomas"));
printOut("(2 equals 5) is this statement true? " + "The statement is: " + Boolean(2 == 5));
printOut(" ( \"abcd\" is greater than \"bcd\") is this statement false? " + "The statement is: " + Boolean("abcd">"bcd"));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number */

let x = "254";
let y = "57.73";
let z = "25 kroner";

printOut(x.valueOf());
printOut(y.valueOf());
printOut(z.valueOf());
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360) */

let r = Math.floor(Math.random() * 360) + 1;

printOut(r+"");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Use modulus (%) to calculate how many weeks and days are in 131 days.*/
let week = 131/7;
let restDays= 131%7;

printOut("There are " + Math.floor(week) + " weeks and " + restDays + " days in 131 days");
printOut(newLine);