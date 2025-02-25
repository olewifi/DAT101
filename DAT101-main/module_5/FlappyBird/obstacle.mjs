"use strict";
import libSprite from "../../common/libs/libSprite.mjs";
import lib2D from "../../common/libs/lib2D.mjs";
import { GameProps } from "./FlappyBird.mjs";

class TObstacle{
    #upperObstacle;
    #lowerObstacle;
    #spi;
    constructor (aSpriteCanvas, aSpriteInfo){
        this.#spi = aSpriteInfo;
        const minTop = -320 + 25;
        let top = Math.floor(Math.random() * minTop);
        let pos = new lib2D.TPosition(650, top);
        this.#upperObstacle = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
        this.#upperObstacle.index = 3;
        const groundY = GameProps.ground.posY;
        top += this.#spi.height + 150;
        const gap = top - groundY - 25;

        top = Math.floor(Math.random() * gap) + groundY - 25;
        pos.y = top;
        this.#lowerObstacle = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
        this.#lowerObstacle.index = 2;
        this.hasPassed = false;
    }

    draw(){
        this.#upperObstacle.draw();
        this.#lowerObstacle.draw();
    }

    update(){
        this.#upperObstacle.translate(-1, 0);
        this.#lowerObstacle.translate(-1, 0);
        const hasCollided = 
        GameProps.hero.hasCollided(this.#upperObstacle) ||
        GameProps.hero.hasCollided(this.#lowerObstacle);
 
        if(hasCollided){
            GameProps.hero.flap();
            GameProps.hero.isDead = true;
            console.log("Game Over...");
        }
    }

    get right(){
        return this.#upperObstacle.right;
    }

    get left(){
        return this.#upperObstacle.left;
    }

    get posX(){
        return this.#upperObstacle.posX;
    }
}

export default TObstacle;