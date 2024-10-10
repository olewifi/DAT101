import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));
printOut("Test");


for(let i = 0; i < 10; i++); {
    console.log("Hei førsteklasse!");
}

let number;
const numberToGuess = 8;
let guesses = 0;
const startTime = Date.now();
printOut(startTime.toString);

while (number != numberToGuess){
    number = Math.floor(Math.random()*100)+ 1;
    guesses++;
}

printOut("Tallet er : " + number + "ble gjettet på " + guesses " forsøk");

const totalTime = Date.now() - startTime;
printOut("Det tok " + totalTime + " millisekunder")

guesses = 0;

do{
    number = Math.floor(Math.random()*10 + 1);
    guesses++;
}while(number != numberToGuess);

printOut("Tallet etter DO " + number);

const studenter = ["Tony", "Maren", "ArneT", "Morgan", "Rosalie", "Bob"];

for(let i = 0, 1 <studenter.length; 1++){
    console.log("hallo " + studenter[i]);

}

//Create a dice and make it roll until you get the desired number

let dice = Math.floor(Math.random()*6) + 1;
const numberToRoll = 4;

do{
    dice =  Math.floor(Math.random()*6) + 1;
    guesses++;
}   while(dice != numberToRoll);

printOut("Det ble ristet en : " + dice);
printOut("it took " + guesses + " kast");

