"use strict";
import lib2d_v2 from "../../common/libs/lib2d_v2.mjs";
import libSprite_v2 from "../../common/libs/libSprite_v2.mjs";
import { SpriteInfoList, GameProps, EGameStatus } from "./BrickBreaker.mjs";

export class TMenu {
    #spcvs;
    #spMenu;
    spStartButton;
    #activeSprite
    
    constructor(aspriteCanvas){
        this.#spcvs = aspriteCanvas;
        const middleX = SpriteInfoList.Background.width / 2;
        const middleY = SpriteInfoList.Background.height / 2;

        const pos = new lib2d_v2.TPosition(
            middleX - SpriteInfoList.Menu.width / 2,
            middleY - SpriteInfoList.Menu.height /2);
        this.#spMenu = new libSprite_v2.TSprite(this.#spcvs, SpriteInfoList.Menu, pos);

        pos.x = middleX - SpriteInfoList.StartBtn.width / 2;
        pos.y = middleY + 75;
        this.spStartButton = new libSprite_v2.TSpriteButtonHaptic(aspriteCanvas, SpriteInfoList.StartBtn, pos, lib2d_v2.TRectangle);

    }

    statusChanger(){
        console.log("Skift EGameStatus wooo!");
        GameProps.status = EGameStatus.playing;
    }

    buttonClick(){
        this.spStartButton.onClick = this.statusChanger;
    }
    
    draw(){
        switch(GameProps.status) {
            case EGameStatus.start:
                this.#spMenu.draw();
                this.spStartButton.draw();
                this.buttonClick();
                break;

        }
    }
}


/*Boolean( = "pointer");
console.log(Boolean(this.spcvs.style.cursor = "pointer"));
*/
 //libSprite_v2.TSpriteButton(spcvs, )
 //Se på Simon Says hvordan TSpriteButton funker
//Tegne statusene, riktig meny npr
//Boolean, lar den klikke når den er pointer
//