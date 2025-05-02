"use strict";

//--------------------------------------------------------------------------------------------------------------------
//------ Imports
//--------------------------------------------------------------------------------------------------------------------
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { TColourPicker } from "./ColorPicker.mjs";
import { MastermindBoard } from "./MastermindBoard.mjs";
import { TMenu } from "./menu.mjs";

//--------------------------------------------------------------------------------------------------------------------
//------ Variables, Constants and Objects
//--------------------------------------------------------------------------------------------------------------------

// prettier-ignore
export const SpriteInfoList = {
  Board:              { x: 320, y:   0, width: 441, height: 640, count: 1 },
  ButtonNewGame:      { x:   0, y:  45, width: 160, height:  45, count: 2 },
  ButtonCheckAnswer:  { x:   0, y:   0, width: 160, height:  45, count: 2 },
  ButtonCheat:        { x:   0, y: 139, width:  75, height:  49, count: 2 },
  PanelHideAnswer:    { x:   0, y:  90, width: 186, height:  49, count: 1 },
  ColorPicker:        { x:   0, y: 200, width:  34, height:  34, count: 8 },
  ColorHint:          { x:   0, y: 250, width:  19, height:  18, count: 3 },
};

const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

//Add all you game objects here
export const GameProps = {
  board: null,
  ColorPicker: [],
  snapTo: {
    positions: MastermindBoard.ColorAnswer.Row1, 
    distance: 20,
  },
  ComputerAnswers: [],
  roundIndicator: null,
  menu: null,
  playerAnswers: [null, null, null, null],
  answerHintRow: MastermindBoard.AnswerHint.Row1,
};

//--------------------------------------------------------------------------------------------------------------------
//------ Functions
//--------------------------------------------------------------------------------------------------------------------

function newGame() {
  generateComputerAnswer();
}

function drawGame(){
  spcvs.clearCanvas();
  //Draw all game objects here, remember to think about the draw order (layers in PhotoShop for example!)
  GameProps.board.draw();

  GameProps.ColorPicker[0].draw(); //SKAL DENNE VÆRE HER?

  for(let i = 0; i < GameProps.ComputerAnswers.length; i++){
    const computerAnswers = GameProps.ComputerAnswers[i];
    computerAnswers.draw();
  }

  GameProps.roundIndicator.draw();

  GameProps.menu.draw();

  for(let i = 0; i < GameProps.ColorPicker.length; i++){
    const colorPicker = GameProps.ColorPicker[i];
    colorPicker.draw();
  }
  requestAnimationFrame(drawGame);
}

function generateComputerAnswer(){
  //først må vi generere 4 tilfeldige farger
  //Deretter må vi plassere disse fargene i computerAnswers
  //Vi må bruke libSprite.TSprite for å lage en sprite for hver farge

  for(let i = 0; i < 4; i++){
    const colorIndex = Math.floor(Math.random()*SpriteInfoList.ColorPicker.count);
    const pos = MastermindBoard.ComputerAnswer[i];
    const sprite = new libSprite.TSprite(spcvs, SpriteInfoList.ColorPicker, pos);
    sprite.index = colorIndex;
    GameProps.ComputerAnswers.push(sprite);
  }

}

export function moveRoundIndicator(){
  const pos = GameProps.snapTo.positions[0];
  GameProps.roundIndicator.x = pos.x -84;
  GameProps.roundIndicator.y = pos.y +7;
}

//--------------------------------------------------------------------------------------------------------------------
//------ Event Handlers
//--------------------------------------------------------------------------------------------------------------------

//loadGame runs once when the sprite sheet is loaded
function loadGame() {
  //Set canvas with and height to match the sprite sheet
  cvs.width = SpriteInfoList.Board.width;
  cvs.height = SpriteInfoList.Board.height;
  spcvs.updateBoundsRect();
  let pos = new lib2D.TPoint(0, 0);
  GameProps.board = new libSprite.TSprite(spcvs, SpriteInfoList.Board, pos);

  GameProps.ColorPicker = [
    new TColourPicker (spcvs, SpriteInfoList.ColorPicker, "Black", 0),
    new TColourPicker (spcvs, SpriteInfoList.ColorPicker, "Blue", 1),
    new TColourPicker (spcvs, SpriteInfoList.ColorPicker,"Brown", 2),
    new TColourPicker (spcvs, SpriteInfoList.ColorPicker, "Green", 3),
    new TColourPicker (spcvs, SpriteInfoList.ColorPicker, "Orange", 4),
    new TColourPicker (spcvs, SpriteInfoList.ColorPicker, "Red", 5),
    new TColourPicker (spcvs, SpriteInfoList.ColorPicker, "White", 6),
    new TColourPicker (spcvs, SpriteInfoList.ColorPicker, "Yellow", 7),
  ]
  
  pos = GameProps.snapTo.positions[0];
  GameProps.roundIndicator = new libSprite.TSprite(spcvs, SpriteInfoList.ColorHint, pos);
  GameProps.roundIndicator.index = 2;
  moveRoundIndicator();

  GameProps.menu = new TMenu(spcvs);

  newGame();
  requestAnimationFrame(drawGame); // Start the animation loop
}


//--------------------------------------------------------------------------------------------------------------------
//------ Main Code
//--------------------------------------------------------------------------------------------------------------------


spcvs.loadSpriteSheet("./Media/SpriteSheet.png", loadGame);
window.addEventListener("resize", () => spcvs.updateBoundsRect());
