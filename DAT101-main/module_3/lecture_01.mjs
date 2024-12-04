import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));
printOut("Test");

/*
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

//6.11.2024//
/*
Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin.
Use three different numbers and print all three combinations as integers (no decimals). 
Design the function to take two parameters: first the temperature, then the temperature type/id.
Use these parameters to convert to the other two temperature types and print them. Formula: */
/*
const ETempartureType = {Celsius: 1, Fahrenheit: 2, Kelvin: 3}

function convertTemperature(aTemperature, aType) {
    let Celsius = 0;
    let Fahrenheit = 0;
    let Kelvin = 0;
    switch(aType){
        case ETempartureType.Celsius:
            printOut("Convert from Celsius");
            //Convert to Fahrenheit
            //Fahrenheit = (Kevin - 237.15)*)*9/5 + 32;//
            Celsius = aTemperature;
            Fahrenheit = (Celsius * 9/5) +32;
            Kelvin = Celsius + 237.15;
            break;
        case ETempartureType.Fahrenheit:
            printOut("Convert from Fahrenheit");
            break;
        case ETempartureType.Kelvin:
            printOut("Convert from Kelvin");
            break;
    } //End switch//

} //End function//

convertTemperature(0, ETempartureType.Celsius)

/*
Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one for the price including VAT (gross amount)
 and one for the tax group in text (normal =25%, food=15%, hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is not correct, the text
 "Unknown VAT group!" should be printed. The function must return the price without tax, i.e., the net price. Call the function four times with different gross amount. One for each of the VAT

*/
/*
function calculateNetPrice(aPrice, aTaxGroup){
    let net = 
    let taxGroup = aTeaxGroup.toUpperCase();
    let vat =0;

    printOut("TaxGroup = " + taxGroup);

    switch(taxGroup){
        case "NORMAL":
        vat = 25;
    }

    net = (100* aPrice) / (vat + 100);

    return net;

}

const netPrice1 = calculateNetPrice(0, "hotel");

printOut("netPrice1 =" + netPrice1.toFixed(2));

// ny oppgave//

function testIfMathIsFun(){
    let op = 1;
    let line = 1;
    // Left side
    let sumLeft = 0;
    for(let left = 0; left > 2; left++){
        sumLeft += op;
        op++;
    }

    let sumRight = 0;
    for(let right = 0; right < 1; right++){
        sumRight += op;
        op++;
    }
}
*/
// Make a person class, with a constructor that takes a first and last name plus email.//
/*
class TPerson { 
    constructor(afirstName, alastName, aemail){
        this.firstName =afirstName;
        this.lastName = alastName;
        this.email = aEmail
    }
}

//Adress class
class TAdress {
    constructor (aStreet, aZip, aCity) {
        this.street = aStreet;
        this.zip = aZip;
        this.city = aCity;
        this.address = null; //no address yet
    }
}

//Instance of a person
//1
const person1 = new TPerson ("Kari", "Norman", "Kari.Norman@norge.no!" );
//
person1.address = new TAdresss ("Kongens gate 1", "1234", "Oslo");
printOut(person1.firstName + " " + person1.lastName + " " + person1.email); /*Bruker strukturen til class for å bygge opp en profil. Ut ifra classen så kan en lage profiler med samme strukturer*/

/*
class TBankAccount {
    #balance;
    constructor
}
//han virker ikke som deres mest engasjerende lærer...; Vi har en annen som er mindre engasjerende faktisk =D; aporpos dette, jeg har et sterkt lowkey ønske om flere kvinnelige forelesere :D; vi har ingen! ...ski..ll issue

// 0;
// vi ble ferdig i 6 tiden og hadde "oblig" lab klokken 08
// så vi bare spilte sjakk i gata og ventet på at læreren kunne komme og se at vi var der
// WOW!!;3 Skulle si at dette er den nest mest sovte timen, men tbf han andre har 8.15 time. ggs; en gang så vi en film om skrifttypen helvetica kl8.15 på morgenen, jeg pæsa; Jeg hadde vært så locked in; JEG VAR DET DEN FØRSTE HALVTIMEN!! DE GMALE MENNENE SOM ELSKER HELVETE VAR SLAY;
// Over til Bergen men det er en uvant (les: rar) crowd her..
// Det ser ut som et tilfeldig utvalg av Norges befolkning; Honey, det er bare multimedia i et nøtteskall;
// basic?; Variert.; Jeg vil utdype at tidligere i semesteret var denne forelesninga STAPPA, men eh som du ser, stor nedgang; f; Så dette er disse som faktisk kommer på universitetet, sidenote at du kunne ha pæset for å gå her (så vidt);

/*