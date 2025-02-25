"use strict";
import lib2D from "../../common/libs/lib2D.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus, startGame } from "./FlappyBird.mjs";

/*
Dere skal flytte FlappyBird spriten til en fornuftig plass på skjermen.
Lage en play knapp som kan starte spillet.
*/
    
export class TMenu{
    #spFlappyBird;
    #spButtonPlay;
    #spNumber;
    #spInfoText;
    #spcvs;
    #activeSprite;
    #spGameOver;
    #spMedal;
    #posScore; //nåværende score
    #posBestOf; //best score
    #posPlayScore;
    #ranking = {first: 0, second: 0, third: 0}

    constructor(aSpriteCanvas){
        this.#spcvs = aSpriteCanvas;
        const pos = new lib2D.TPosition((SpriteInfoList.background.width / 2) - (SpriteInfoList.flappyBird.width /2), ((SpriteInfoList.background.height - SpriteInfoList.ground.height) /2 - SpriteInfoList.flappyBird.height / 2));
        //Bruk denne koden for jukse litt og starte spillet direkte
        //GameProps.status = EGameStatus.getReady

        GameProps.status = EGameStatus.idle;
        this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos);

        pos.y = (SpriteInfoList.background.height / 2) + 25;
        pos.x = (SpriteInfoList.background.width - SpriteInfoList.buttonPlay.width) / 2;
        this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay, pos);
        
        
        pos.y = 100;
        pos.x = (SpriteInfoList.background.width - SpriteInfoList.infoText.width) / 2;
        this.#spInfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.infoText, pos);

        //Forandrer pos til nedtelling
        pos.y = 175;
        pos.x = (SpriteInfoList.background.width - SpriteInfoList.numberBig.width) / 2;
        this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberBig, pos);
        this.#spNumber.index = 3; //nedtelling starter på 3
        //klikke muligheter
        this.#spcvs.addEventListener("mousemove", this.#onMouseMove);
        this.#spcvs.addEventListener("click", this.#onClick);
        this.#activeSprite = null; //Vi har ingen aktive sprites

        //Posisjon til Game over, medal plaque
        pos.y = ((SpriteInfoList.background.height - SpriteInfoList.gameOver.height) / 2) - 45;
        pos.x = (SpriteInfoList.background.width - SpriteInfoList.gameOver.width) / 2;
        this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.gameOver, pos);

        //Medaljene
        pos.y = 198;
        pos.x = 200;
        this.#spMedal = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.medal, pos);
        this.#spMedal.index = 3;

        this.#posScore = new lib2D.TPosition(380, 206);
        this.#posBestOf = new lib2D.TPosition(380, 250);
        this.#posPlayScore = new lib2D.TPosition(75, 50);

    } 

    draw(){
        switch (GameProps.status){
            case EGameStatus.idle:
                this.#spFlappyBird.draw();
                this.#spButtonPlay.draw();
                break;
            case EGameStatus.getReady:
                this.#spInfoText.index = 0; //Endre teksten til "Get ready"
                this.#spInfoText.draw();
                this.#spNumber.draw();
                break;
            case EGameStatus.gameOver:
                this.#spInfoText.index = 1; //Endrer teksten til "Game over"
                this.#spInfoText.draw();
                this.#spGameOver.draw();
                this.#spMedal.draw();
                this.#spcvs.drawText(GameProps.score, this.#posScore);
                this.#spcvs.drawText(GameProps.bestScore.toString(), this.#posBestOf);
                this.#spButtonPlay.draw();
                break;
            case EGameStatus.playing:
                this.#spcvs.drawText(GameProps.score.toString(), this.#posPlayScore)

                //Her skal dere nå tegne game over spritene 
                //Dere skal må lage de forskjellige sprite objektene som private medlemmer i klassen
                //HINT: Bruk f.eks this#spGameover ... osv
        }
    } //End of draw

    setScore(aScore){
        GameProps.score += aScore;
        if(GameProps.score > this.#ranking.first){ //Første plass
            this.#ranking.third = this.#ranking.second;
            this.#ranking.second = this.#ranking.first;
            this.#ranking.first = GameProps.score;
            GameProps.bestScore = this.#ranking.first;
            this.#spMedal.index = 2;
        }else if(GameProps.score > this.#ranking.second){ //Andre plass
            this.#ranking.third = this.#ranking.second;
            this.#ranking.second = GameProps.score;
            this.#spMedal.index = 1;
        }else if(GameProps.score > this.#ranking.third){ //Tredje plass
            this.#ranking.third = GameProps.score;
            this.#spMedal.index = 3;
        }else{
            this.#spMedal.index = 0;
        }
    }

    reset(){
        GameProps.score = 0;
        this.#spNumber.index = 3;
        this.#spInfoText.index = 0;
    }

    //Ikke eksamensrelevant, men viktig for eventer i canvas

    #onMouseMove = (aEvent) => {
        const pos = this.#spcvs.getMousePos(aEvent);
        const boundRect = this.#spButtonPlay.boundingBox;
        switch(GameProps.status){
            case EGameStatus.idle:
                if(boundRect.isPositionInside(pos)){
                    this.#spcvs.style.cursor = "pointer";
                    this.#activeSprite = this.#spButtonPlay;
                } else {
                    this.#spcvs.style.cursor = "default";
                    this.#activeSprite = null; //ingen sprites er aktive
                }
                break;
        }
    };

    #onClick = () => {
        if (this.#activeSprite === this.#spButtonPlay){
            GameProps.status = EGameStatus.getReady;
            this.#spcvs.style.cursor = "default";
            setTimeout(this.#onCountDown, 1000);
        } else {
            //hvordan kan vi kjøre funksjonen "startGame" herfra?
            startGame();
        }
    };

    #onCountDown = () => {
        if(this.#spNumber.index > 1 ){
            this.#spNumber.index--;
            setTimeout(this.#onCountDown, 1000);
        } else {
            GameProps.status = EGameStatus.playing;
        }
    }
}//End of Tmenu class