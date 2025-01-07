"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString".*/

function todaysDate(){
    const today = new Date();

    //Format:
    const formatDate = today.toLocaleDateString("no-NB",{
        weekday: 'long', 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    printOut(formatDate);
    return;
}

todaysDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation.

1. The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends
universe, launching on May 14th, 2025.
Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a
touch of visual excitement!
Remember:

● This task isn't just about coding; it's about harnessing the power of dates and functions to create
something both informative and engaging.
● Accuracy is key! Make sure your countdown is precise and your date formatting is impeccable.
● Creativity is encouraged! Let your passion for gaming and multimedia shine through in your output.*/

function countdownLOL(){
    const today = new Date();
    const formatTodayDate = today.toLocaleDateString("no-NB",{
        weekday: 'long', 
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const launchDate = new Date(2025, 4, 14, 0, 0, 1);
    const formatLaunchDate = launchDate.toLocaleDateString("no-NB",{
        weekday: 'long', 
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const differenceInMilliseconds = launchDate - today;

    // Convert milliseconds into meaningful units
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);

    printOut(`There are ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until 2XKO debut!`);
}

todaysDate();
countdownLOL();


//Lag en presis countdown til 14.Mai 2025



printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*Create a function that receives the radius of a circle and prints the diameter, circumference, and area.*/

function circleMath() {

    let diameter = radius * 2; //in cm
    let circumference = Math.PI * diameter;
    let area = Math.PI * (radius**2);

    
    printOut("The radius of the circle is: " + radius.toFixed(2) + "cm.");
    printOut("The diameter is: " + diameter.toFixed(2) + "cm.");
    printOut("The circumference is: " + circumference.toFixed(2) + "cm.");
    printOut("And the area is: " + area.toFixed(2) + "cm\u00B2.");

}

let radius = 5;

circleMath();

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.*/

function rectangleMath(){

    let circumferenceRectangle = (2*width) + (2*height);
    let areaRectangle = width*height;

    printOut("The circumference of the rectangle is: " + circumferenceRectangle + "cm.");
    printOut("The area of the rectangle is: " + areaRectangle + "cm\u00B2.");
}

let width = 2;
let height = 3;

rectangleMath();

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. Formula:
*/
function temperatureConversion(temp, type){

    let celsius, fahrenheit, kelvin;

    if (type === "Celsius"){
        celsius = temp;
        fahrenheit = Math.round(temp * 9/5 + 32);
        kelvin = Math.round(temp + 273.15);

    } else if (type === "Fahrenheit") {
        fahrenheit = temp;
        celsius = Math.round((temp - 32) * (5/9));
        kelvin = Math.round(celsius + 273.15);
    
    } else if (type === "Kelvin") {
        kelvin = temp;
        celsius = Math.round(temp - 273.15);
        fahrenheit = Math.round(celsius * 9/5 + 32);
    } else {
        printOut("Invalid temperature type. Use 'Celsius', 'Fahrenheit', or 'Kelvin'.");
        return;
    }

    printOut("The temperature input is " + temp + " " + type);
    printOut("Celsius: " + celsius + "°C");
    printOut("Fahrenheit: " + fahrenheit + "°F");
    printOut("Kelvin: " + kelvin + "k");
    printOut(newLine);

}

temperatureConversion(47, "Celsius");
temperatureConversion(100, "Fahrenheit");
temperatureConversion(300, "Kelvin");

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100)*/

function priceCalculator(gross, vatGroup){
    let net;

    if (vatGroup === "Normal"){
        const vat = 25;
        net = (100 * gross) / (vat + 100);
        
    } else if (vatGroup === "Food"){
        const vat = 15;
        net = (100 * gross) / (vat + 100);

    } else if (vatGroup === "Hotel" || vatGroup === "Transport" || vatGroup === "Cinema"){
        const vat = 10;
        net = (100 * gross) / (vat + 100);

    } else {
        printOut("Unkown VAT group!");
        return;
    }

    printOut(gross + " is " + net.toFixed(2) + " without tax.");
}

priceCalculator(100, "Normal");
priceCalculator(150, "Food");
priceCalculator(50, "Cinema");
priceCalculator(500, "Farms");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN.*/

function SDTcalculator(speed, distance, time){

    if(distance === undefined && time === undefined || distance === undefined && speed === undefined || speed === undefined && time === undefined){
        printOut("There are too many parameters missing " + NaN);
        return;

    }else if (speed === undefined){
        let speed = distance / time;
        printOut("Speed = " + speed.toFixed(2) + "km/h");
        printOut("Distance: " + distance + "m");
        printOut("Time: " + time + "h");
        
    }else if (distance === undefined){
        let distance = speed*time;
        printOut("Speed = " + speed + "km/h");
        printOut("Distance: " + distance.toFixed(2) + "m");
        printOut("Time: " + time + "h");
        
    }else if (time === undefined){
        let time = distance / speed;
        printOut("Speed = " + speed + "km/h");
        printOut("Distance: " + distance + "m");
        printOut("Time: " + time.toFixed(2) + "h");
        
    }else{
    printOut("No parameters are missing!");

    }
   printOut(newLine);
}

SDTcalculator(undefined, 50, 0.67);
SDTcalculator(60, undefined, 2);
SDTcalculator(70, 105, undefined);
SDTcalculator(undefined, 50, undefined);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out*/

function Magic(text, maxSize, character, insertPosition){
    if (text.length < maxSize){

        let charsToAdd = maxSize - text.length;

        let addition = character.repeat(charsToAdd);

        if (insertPosition) {
            text = addition + text;
        } else {
            text = text + addition;
        }
    }
    printOut(text + "");
}

Magic("Magi", 10, "!", false);
Magic("Whaaat", 30, ".", true);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*From mathematics, we have the following expression:
1 + 2 = 3 
4 + 5 + 6 = 7 + 8 
9 + 10 + 11 + 12 = 13 + 14 + 15 
16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24
25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35
Create a function or functions that can test this expression for 200 lines. If the test fails, print out where the
two sides are not equal and stop the loop. If all 200 lines are OK, print "Maths fun!"*/

  
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.*/

function factorial(n) {

    if (n === 0 || n === 1) {
        return 1;
    }
    
return n*factorial(n-1);

}

printOut("recrusiveFunction(5) is: " + factorial(5));
printOut("recrusiveFunction(3) is: " + factorial(3));
printOut("recrusiveFunction(10) is: " + factorial(10));

printOut(newLine);
