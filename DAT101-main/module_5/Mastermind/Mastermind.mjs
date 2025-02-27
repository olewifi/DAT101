"use strict";

//--------------------------------------------------------------------------------------------------------------------
//------ Imports
//--------------------------------------------------------------------------------------------------------------------
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
<<<<<<< HEAD
import { TColourPicker } from "./ColorPicker.mjs";
import MastermindBoard from "./MastermindBoard.mjs";
=======
>>>>>>> 24b694e9d1ac4b3dab9f53d4cbafb3f33867428f

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
  ColorHint:          { x:   0, y: 250, width:  19, height:  18, count: 2 },
};

const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

//Add all you game objects here
export const GameProps = {
<<<<<<< HEAD
  snapTo: {
    positions: MastermindBoard.ColorAnswer.Row1, 
    distance: 20,
  },
  Board: new libSprite.TSprite(spcvs, SpriteInfoList.Board, new lib2D.TPoint(0,0)),
  ColorPicker: null,
};
=======
 
}
>>>>>>> 24b694e9d1ac4b3dab9f53d4cbafb3f33867428f

//--------------------------------------------------------------------------------------------------------------------
//------ Functions
//--------------------------------------------------------------------------------------------------------------------

function newGame() {
}

function drawGame(){
  spcvs.clearCanvas();
<<<<<<< HEAD
  GameProps.Board.draw();
  GameProps.ColorPicker[0].draw();

  for(let i = 0; i < GameProps.ColorPicker.length; i++){
    const colorPicker = GameProps.ColorPicker[i];
    colorPicker.draw();

  }
  //Draw all game objects here, remember to think about the draw order (layers in PhotoShop for example!)
=======
  //Draw all game objects here, remember to think about the draw order (layers in PhotoShop for example!)
  
>>>>>>> 24b694e9d1ac4b3dab9f53d4cbafb3f33867428f
  requestAnimationFrame(drawGame);
}

//--------------------------------------------------------------------------------------------------------------------
//------ Event Handlers
//--------------------------------------------------------------------------------------------------------------------

//loadGame runs once when the sprite sheet is loaded
function loadGame() {
  //Set canvas with and height to match the sprite sheet
  cvs.width = SpriteInfoList.Board.width;
  cvs.height = SpriteInfoList.Board.height;
<<<<<<< HEAD
  spcvs.updateBoundsRect();

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
=======
>>>>>>> 24b694e9d1ac4b3dab9f53d4cbafb3f33867428f

  newGame();
  requestAnimationFrame(drawGame); // Start the animation loop
}


//--------------------------------------------------------------------------------------------------------------------
//------ Main Code
//--------------------------------------------------------------------------------------------------------------------


<<<<<<< HEAD
spcvs.loadSpriteSheet("./Media/SpriteSheet.png", loadGame);
window.addEventListener("resize", () => spcvs.updateBoundsRect());
=======
spcvs.loadSpriteSheet("./Media/SpriteSheet.png", loadGame);
>>>>>>> 24b694e9d1ac4b3dab9f53d4cbafb3f33867428f
