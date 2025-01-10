"use strict";

/**
 * @library libSprite
 * @description A library for classes that manage sprite animations.
 */

class TSpriteCanvas {
  #cvs; //Canvas
  #ctx; //What we are gonna draw in
  #img; //The image we are drawing from
  
  constructor(aCanvas) {
    this.#cvs = aCanvas;
    this.#ctx = aCanvas.getContext("2d");
    this.#img = new Image();
  }

  loadSpriteSheet(aFileName, aLoadedFinal){
    this.#img.onload = aLoadedFinal;
    this.#img.src = aFileName;
  }

  drawSprite(aSpriteInfo, aDx = 0, aDy = 0, aIndex = 0){
  let index = aIndex;
  const sx = aSpriteInfo.x + (index * aSpriteInfo.width);
  const sy = aSpriteInfo.y;
  const sw = aSpriteInfo.width; //sWidth
  const sh = aSpriteInfo.height; //sHeight
  const dx = 100; //posisjon hvor bildet blir tegnet i bredden (x retning)
  const dy = 200; //posisjon hvor bildet blir tegnet i høyden (y retning)
  const dw = sw * 1.5; //dWidth = størrelse/scaling
  const dh = sh * 1.5; //dHeight = størrelse/scaling
  this.#ctx.drawImage(this.#img, sx, sy, sw, sh, dx, dy, dw, dh)
  }
  
  clearCanvas(){
    this.#ctx.clearRect(0, 0, this.#cvs.width, this.#cvs.height);
  }
} //End of TSpriteCanvas class

//Lag en klasse Tsprite med en konstruktør som tar inn et TSpriteCanvas-objekt og et spriteInfo-objekt.

class TSprite {
  #spcvs;
  #spi;
  constructor (aSpriteCanvas, aSpriteInfo){
    this.#spcvs = aSpriteCanvas;
    this.#spi = aSpriteInfo;
  } 

  draw(){
    this.#spcvs.drawSprite(this.#spi)
  }

}//End of TSprite 

export default {
  /**
   * @class TSpriteCanvas
   * @description A class that manage sprite canvas for lading sprite sheets.
   * @param {HTMLCanvasElement} aCanvas - The canvas element to use.
   * @function loadSpriteSheet - Loads a sprite sheet image.
   * @param {string} aFileName - The file name of the sprite sheet image.
   * @param {function} aLoadedFinal - A callback function to call when sheet is done loading.
   */
  TSpriteCanvas: TSpriteCanvas

}