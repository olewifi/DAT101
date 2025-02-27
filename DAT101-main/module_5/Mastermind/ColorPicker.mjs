"use strict";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import MastermindBoard from "./MastermindBoard.mjs";
import { GameProps } from "./Mastermind.mjs";

const Positions  = MastermindBoard.ColorPicker; 

export class TColourPicker extends libSprite.TSpriteDraggable{
    #spcvs;
    #spi;
    #color;
    constructor(spcvs, spriteInfo, color, index){
        super(spcvs, spriteInfo,Positions[color]); 
        this.index = index; 
        this.snapTo = GameProps.snapTo;
        this.#spcvs = spcvs;
        this.#spi = spriteInfo;
        this.#color = color;
     }

    onCanDrop(){
    return false; 
    }

    clone(){
        return new TColourPicker(
            this.#spcvs,
            this.#spi,
            this.#color,
            this.index
        )
    }
    onDrop(){
        GameProps.ColorPicker.push(this.clone());
    }
}