"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 Array creation & Traversal ( 5 points )----------------------------------------------------------------------------------------------");
/*Create an array where you hard-code all the numbers from 1 to 20. Use a for loop to "run through" the
array and print all the elements in the array.
○ Hint: Look at the learning outcomes to find the solutions to the task*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < 20; i++){
    printOut("" + numbers[i]);
}
printOut(newLine);

printOut("--- Part 2 Array joining ( 5 points )----------------------------------------------------------------------------------------------");
/*Take the array from task 1 and use a built-in method found in the array object to print all the elements with
a custom defined character separating all the elements.
○ Hint: You should be able to do it with just one line of code*/

printOut(numbers.join("|"));
printOut(newLine);

printOut("--- Part 3 String to Array & Traversal (10 points) ----------------------------------------------------------------------------------------------");
/*Create a constant that contains the text "Hei på deg, hvordan har du det?" (Hello there, how are you?)
Take this text and convert it into an array that contains all the words in the text, i.e., each element should
contain only one word from the text. Use a loop to traverse (run through) this array so that you can print
which word number, which index the word is at, and the word itself.*/

const greeting = new Array("Hei", "på", "deg,", "hvordan", "har", "du", "det?");

printOut("" + greeting.join(" "));
for (let j = 0; j < greeting.length; j++){
    greeting.join(" ");
    printOut( "Index[" + j + "] " + greeting[j]);
}
printOut(newLine);

printOut("--- Part 4 Array manipulation: Removing elements (10 points) ----------------------------------------------------------------------------------------------");
/*Then create a function that will remove an element from an array. Let the function have two parameters.
Parameter number one is the array from which you will remove the element, parameter two is the text that
should be removed from the array. Check if the element exists in the array so that you can inform whether
the element exists or not in the array.*/

let nameList = 
["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
];

printOut(nameList + "");
printOut(newLine);
function nameTrashing (array, name) {
    const index = array.indexOf(name);

    if (index !== -1){
        array.splice(index, 1);
        printOut(name + " has been removed from the array.");
    }else{
        printOut( name + " does not exist in the array.");
    }
}
nameTrashing(nameList, "Anna");
nameTrashing(nameList, "Anna");

printOut(newLine);

printOut("--- Part 5 Array Merging ( 10 points )----------------------------------------------------------------------------------------------");
/*Create a new array with these names: "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor"and
"Magnus" Merge the arrays with girl names and boy names into a new array with all the names.
○ Hint: You can solve this with two lines of code. Remember that an empty array also has
properties and methods */

const nameList_1 = [
"Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor","Magnus"
];

let allNameList = [...nameList, ...nameList_1];
printOut(allNameList.join(", "));

printOut(newLine);

printOut("--- Part 6 Creating a Book Class (10 points)----------------------------------------------------------------------------------------------");
/*Create a class named TBook.
Let the constructor fill in the three attributes (title, author, and ISBN number). Create a public function
"toString" in the class, it should return a text string that contains the three attributes of the class.
Create an array that contains three instances of the TBook class. Use a loop to print out the books that are
in the list.*/

class TBook {
    #Title;
    #Author;
    #ISBN;

    constructor(title, author, isbn){
    this.#Title = title;
    this.#Author = author;
    this.#ISBN = isbn;

    }
    
    toString(){
        return `Title: ${this.#Title}, Author: ${this.#Author}, ISBN: ${this.#ISBN}`;
    }
}

const books = [
    new TBook("All the Bright Places", "Jennifer Niven", "9780395755917"),
    new TBook("The Hanmaid's Tale", "Margaret Atwood", "9780385490818"),
    new TBook("Historia om Ivar Aasen", "Ottar Grepstad", "9788252186659"),
];

for (let i = 0; i < books.length; i++){
    printOut("Book: " + books[i].toString());
}

printOut(newLine);

printOut("--- Part 7 Arrays of Objects & Static Objects (15 points)----------------------------------------------------------------------------------------------");
/*Create a static object that looks like this:

You can replace the language in the "name" attributes with whatever you want.
Use this function: Object.keys(EWeekDays) to create an array with the "keys" that exist in the
EWeekDays object.
Create a loop that traverses this "key" array and prints all the elements that exist in the EWeekDays object
○ Hint: Use W3Schools as I have shown you, here you see good examples of exactly this!*/

const EweekDays = {
    WeekDay1: {Value: 0x01, name: "Mandag"},
    WeekDay2: {Value: 0x02, name: "Tirsdag"},
    WeekDay3: {Value: 0x04, name: "Onsdag"},
    WeekDay4: {Value: 0x08, name: "Torsdag"},
    WeekDay5: {Value: 0x10, name: "Fredag"},
    WeekDay6: {Value: 0x20, name: "Lørdag"},
    WeekDay7: {Value: 0x40, name: "Søndag"},
    Workdays: {Value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {Value: 0x20 + 0x40, name: "Helg"},
};

const keys = Object.keys(EweekDays);

keys.forEach(key => {
    const item = EweekDays[key];
    printOut(`${key}: Value = ${item.Value}, Name = ${item.name}`)
});

printOut(newLine);

printOut("--- Part 8 Sorting & Callbacks (15 points) ----------------------------------------------------------------------------------------------");
/*Create an array that contains 35 random numbers from 1 to 20 (inclusive). Sort these arrays in ascending
and descending order. To get full credit for this task, it must be solved with "callback" functions that you
use in the .sort(...) method of this array.*/
const randomNumbers = [7, 8, 13, 3, 5, 19, 7, 4, 2, 1, 7, 8, 12, 11, 16, 9, 18, 14, 6, 3, 10, 13, 15, 2, 14, 17, 19, 20, 15, 18,];

printOut("There are " + randomNumbers.length + " numbers");
randomNumbers.sort((a, b) => a - b);
printOut("Ascending: " + randomNumbers.join(", "));
randomNumbers.sort((a, b) => b - a);
printOut("Descending: " + randomNumbers.join(", "));


printOut(newLine);

printOut("--- Part 9 Frequency Analysis (15 points)----------------------------------------------------------------------------------------------");
/*Based on part 8, print out how many times the different numbers occur in the array. First, print the
numbers and their frequency, then print the frequencies and which numbers they correspond to. You must
print the most frequent ones first, and if there are multiple numbers where the frequency is the same, then
it should again be sorted from the smallest to the largest number*/

const frequency = {};
randomNumbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
});

printOut("Number frequencies:");
Object.keys(frequency)
    .sort((a, b) => a - b)
    .forEach(key => {
        printOut(`Number ${key}: ${frequency[key]} times`);
    });

const sortedFrequencies = Object.entries(frequency)
    .sort(([numA, freqA], [numB, freqB]) => {
        if (freqB !== freqA) {
            return freqB - freqA; 
        }
        return numA - numB;
    });

printOut("\nFrequencies sorted:");
sortedFrequencies.forEach(([num, freq]) => {
    printOut(`Frequency ${freq}: Number ${num}`);
});

printOut(newLine);


printOut("--- Part 10 Two-Dimensional Arrays (10 points) ---------------------------------------------------------------------------------------------");
/*Create an array that contains rows and columns (2 dimensions, 5x9). Start with an empty array. Use "for"
loops to create rows and columns, respectively. In each "cell," create a text that shows which row and
column the "cell" is in. Then create two new sets of "for" loops to print the array itself.
○ Hint: For each round in the loop for the rows, you create a column. And for each round in the
columns, you write the "cell" value*/

let RK = [];

let row = "";  
for (let R = 1; R <= 5; R++){
    row += newLine;
    for ( let K = 1; K <= 9; K++)
    {
    row += "Column:" + K + "-Row:" + R + " ";
    }
}

printOut(row + "");

printOut(newLine);
