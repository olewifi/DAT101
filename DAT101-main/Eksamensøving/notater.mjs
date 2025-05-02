import {intPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
intPrintOut(document.getElementById("txtOut"));

//--------------------------Section 1-------------------------------//

let sum = number1 + number2; //primitive type, desimaltall
sum = number1 * number2; //Primitive type, deesimaltall

//                  Funksjons parametere
function addNumbers( aNumber1, aNumber2) { //parametre i funksjoner vil alltid være "let"/variabel
    aNumber1 = 6; //vil forandre variabelen innad i funksjonen, men bare her
    let sum = aNumber1 + aNumber2;
    return sum; //returnerer verdien av sum
}

const number1 = 5; //primitive type, hel tall
const number2 = 10.2; //Primitive type, desimaltall
const result = addNumbers(numbers) //kaller funksjonen
console.log(result.toString()); //Skriver ut resultatet i konsollen
console.log(number1); //skriver ut number1 i konsollen, vil printe ut const som er "utenfor" funksjonen

const numbers = {number1: 5, number2: 10.2}; // {}/Krøllparantesene definerer dette som objekt, ikke primitiv. (Inneholde to primitive)

//--------------Objekter og primitive -----------------------//

EGameStatus = {start: 0, Pause: 1, GameOver: 2} //Enum 

const gameProps = {
    score: 0, // primitive, heltall
    level: 1, //primitive, heltall
    speed: 0.5, //primitive, flyttal
    Hero: new THero(), //object, av typen THero klasse
    obstacles: [], //Object, av typen array
    gameStatus: EGameStatus.start, //Primitive, enum, heltall
    gameInfo: "", //primitive,
    isHeroAlive: true, //primitive, boolean
} //Object!

let text = "Dette er en tekst";

function printText (aText){
    //Tester om aText er en primitiv.
    aText = "Dette er en ny tekst"
    printOut(aText);
}

printText(text);
printOut(text);

//------------------------Section 3---------------------------//

const age1 = 20;
const age2 = 15;

if (age1 > age2) { //Gir true //Utropstegn /! 
    printOut("Age 1 er større enn Age 2");
}else{
    printOut("Age 2 er større enn Age 1");
}

printOut("Age 1: " + age1);
printOut("Age 2: " + age2);

//---------------------------Section 4 -------------------------------//

const numbers_random = [Math.random()];
printOut("numbers: ", numbers_random[0]);


let rand = Math.random() * 10;
const numbers = [
    Math.ceil(rand),
    Math.floor(rand),
];

printOut("numbers: " + rand);
for(let i = 0; i < numbers.length; i++){
    printOut("numbers[" + i + "]: " + numbers[i]);
}

//-------------------Section 5 ------------------------------------------//

const space = "&nbsp;";

let text_2 = "Hello World!";

printOut(text_2); //Print the string to the output area

while(text_2.length < 50){
    text_2 = space + text_2;
}

printOut(text_2); //Print the string to the output area


//-----------------------Section 6 ----------------------------//

const space_1 = "-";

let password = "123456";
let userInput = "";
let attempts = 0;
let maxAttempts = 3;

do{
        userInput = GetPasswordFromUser();
        attempts++;
}while((userInput != password) && (attempths < maxAttempts));

//----------------section 7 ------------------------------//

//navngitte funksjoner
function areaOfCircle(aRadius){
    let area = Math.PI * aRadius * aRadius;
    return area;
}

//Påkall av funksjonen areaOfCircle med radius 5
let area1 = areaOfCircle(5);
printOut("Area 1: " + area1);

//anonym funksjon
let circumference = function(aRadius){
    let circum = 2 * Math.PI * aRadius;
    return circum;
}

//Påkall av den anonyme funksjonen circumference med raidus 5 
let circum1 = circumference(5);

document.addEventListener("click", function(aEvent){
    printOut(aEvent.target);
})

