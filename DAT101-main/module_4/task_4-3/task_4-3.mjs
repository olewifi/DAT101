"use strict";
const carTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
  { value: 14, caption: "VolksWagen"}
];


const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/*Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle.
Use the values from the textboxes and display the results in the labels.*/

const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);

function cmbTask1CalculateClick(){
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = Number(txtRectHeight.value);
  const width = Number(txtRectWidth.value);

  const circumference = (height + height + width + width);
  const area = (height*width);
  const txtTask1Output = document.getElementById("txtTask1Output");

  txtTask1Output.innerHTML = "Omkrets: " + circumference + ", Areal: " + area;
}

//--- Part 2 ----------------------------------------------------------------------------------------------
/*Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter", add the word to the task2Words array and print how
many words and all the words in txtTask2Output. Clear the input field every time the user presses
"enter" or "return".*/

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
let task2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");

function txtTask2WordKeyPress(aEvent){
  const key = aEvent.key;
  switch(key){
    case "Enter":
    const words = txtTask2Word.value.split(" ");
    txtTask2Word.value = "";
    task2Words = task2Words.concat(words);
    txtTask2Output.innerHTML = "Antall ord: " + task2Words.length + "<br>" + task2Words.join(" ");
    console.log(task2Words);
  break;
  }
}


//--- Part 3 ----------------------------------------------------------------------------------------------
/*Create a click event function to check which of the checkboxes are selected. And print the result in
txtTask3Output*/

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = "";
function cmbTask3CheckAnswerClick(){
  const chkTask3 = document.getElementsByName("chkTask3");
  for(let i = 0; i < chkTask3.length; i++) {

    const checkBox = chkTask3[i];
    if(checkBox.checked){
      const value = checkBox.value;
      if(value === "4"){
        text += "Du har valgt nummer " + value + ". Det er en snodig mening?? <br/>";
      }else{
        text += "Du har valgt nummer " + value + ". Det er helt sant! <br/>";
      }
    }
  }
  txtTask3Output.innerHTML = text;
  text = "";
}

//--- Part 4 Radio Button Selection (15 points)----------------------------------------------------------------------------------------------
/*Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
array. Print the selected car in txtTask4Output*/


const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

for (let i = 0; i < carTypes.length; i++){

  const radioList = document.createElement("input");
  radioList.type = "radio";
  radioList.name = "carTypesTask4";
  radioList.value = carTypes[i].value;
  radioList.id = `car${i}`;

  const label = document.createElement("label");
  label.htmlFor = `car${i}`;
  label.textContent = carTypes[i].caption;

  divTask4Cars.appendChild(radioList);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br"));
}

divTask4Cars.addEventListener("change", (event) => {
  if (event.target.type === "radio") {
    const selectedCar = carTypes.find(car => car.value == event.target.value);
    txtTask4Output.textContent = "Favoritt bilen din er: " + selectedCar.caption;
  }
});

//--- Part 5 ----------------------------------------------------------------------------------------------
/*Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element.*/

const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", () => {
  const selectedAnimal = selectTask5Animals.value;

  txtTask5Output.textContent = "Du har valgt: " + selectedAnimal;
    
  });

//--- Part 6 ----------------------------------------------------------------------------------------------
/*Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output*/

const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for (let i = 0; i< GirlsNames.length; i++){
  const option = document.createElement("option");
  option.value = GirlsNames[i];
  option.textContent = GirlsNames[i];
  selectTask6Girls.appendChild(option);
}

selectTask6Girls.addEventListener("change", () => {
  const selectedName = selectTask6Girls.value;
  txtTask6Output.textContent = "Jente navn valgt: " + selectedName;
  });




//--- Part 7 ----------------------------------------------------------------------------------------------
/*Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre*/

//Gathering the HTML elements
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieTitle = document.getElementById("txtMovieTitle");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");

//Moviegenre dropdown
MovieGenre.forEach(genre => {
  const option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  selectMovieGenre.appendChild(option);
});

//Adding movies to list
cmbAddMovie.addEventListener("click", () => {
  const title = txtMovieTitle.value;
  const genre = selectMovieGenre.value;
  const director = txtMovieDirector.value;
  const rate = txtMovieRate.value;

  if (title && genre && director && rate){
    const newRow = tblMovies.insertRow();

    const cellTitle = newRow.insertCell(0);
    const cellGenre = newRow.insertCell(1);
    const cellDirector = newRow.insertCell(2);
    const cellRate = newRow.insertCell(3);
    
    cellTitle.textContent = title;
    cellGenre.textContent = genre;
    cellDirector.textContent = director;
    cellRate.textContent = rate;

    txtMovieTitle.value = "";
    selectMovieGenre.value = "";
    txtMovieDirector.value = "";
    txtMovieRate.value = 5;
  } else {
    alert("Please fill in all fields.");
  }
});

