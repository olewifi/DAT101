"use strict";
import lib2d_v2 from "../../common/libs/lib2d_v2.mjs";
import libSprite_v2 from "../../common/libs/libSprite_v2.mjs";
import { SpriteInfoList, GameProps } from "./BrickBreaker.mjs";

export class TBrick extends libSprite_v2.TSprite {
    //lag konstruktør og benytt super til å arve fra TSprite
    #lifeLeft;
    constructor(aSpriteCanvas){
        const bounds = GameProps.bounds;
        let centerX = bounds.right - bounds.left;
        centerX -= (SpriteInfoList.BrickPurple.width / 2);
        const pos = new lib2d_v2.TPoint(centerX, 200);

        super(aSpriteCanvas, SpriteInfoList.BrickPurple, pos);
    }
}

