"use strict";
import lib2d_v2 from "../../common/libs/lib2d_v2.mjs";
import libSprite_v2 from "../../common/libs/libSprite_v2.mjs";
import { SpriteInfoList } from "./BrickBreaker.mjs";

export class TBrick extends libSprite_v2.TSprite {
    //lag konstruktør og benytt super til å arve fra TSprite
    constructor(aSpriteCanvas, aSpriteInfo, aPosition){
        super(aSpriteCanvas, aSpriteInfo, aPosition)
    }
}

