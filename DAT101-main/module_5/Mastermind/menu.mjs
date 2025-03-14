"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import { GameProps, SpriteInfoList, moveRoundIndicator } from "./Mastermind.mjs";
import { MastermindBoard } from "./MastermindBoard.mjs";

//Lag en meny klasse "TMenu", ingen arv, skal ha tre knapper og en sprite

export class TMenu{
    #buttonNewGame;
    #ButtonCheckAnswer;
    #ButtonCheat;
    #panelHint;
    #colorHints;
    #spcvs;
    #roundNumber;

    constructor(aSpriteCanvas){
        this.#spcvs = aSpriteCanvas;
        this.#roundNumber = 1;
        this.#buttonNewGame= 
        new libSprite.TSpriteButton(
            aSpriteCanvas, 
            SpriteInfoList.ButtonNewGame, 
            MastermindBoard.ButtonNewGame);
        this.#ButtonCheckAnswer = 
        new libSprite.TSpriteButton(
            aSpriteCanvas,
            SpriteInfoList.ButtonCheckAnswer,
            MastermindBoard.ButtonCheckAnswer);
        this.#ButtonCheat =
        new libSprite.TSpriteButton(
            aSpriteCanvas,
            SpriteInfoList.ButtonCheat,
            MastermindBoard.ButtonCheat);

        this.#panelHint = 
        new libSprite.TSprite(
            aSpriteCanvas,
            SpriteInfoList.PanelHideAnswer,
            MastermindBoard.PanelHideAnswer);

        this.#ButtonCheat.onClick = this.onHintClick;
        this.#ButtonCheckAnswer.onClick = this.onCheckAnswerClick;
        this.#colorHints = [];
    }
    draw(){
        this.#buttonNewGame.draw();
        this.#ButtonCheckAnswer.draw();
        this.#ButtonCheat.draw();
        this.#panelHint.draw();
        for(let i = 0; i < this.#colorHints.length; i++){
            const colorHint = this.#colorHints[i];
            colorHint.draw();
        }
    }

    onHintClick = () =>{
        this.#panelHint.visible = !this.#panelHint.visible;
    }
    
    onCheckAnswerClick = () =>{

        //Denne sjekker om vi har valgt rett farge
        const answerObject = {color : 0, pos: -1, checkThis: true};
        //Lage liste over computerens svar
        const computerAnswerList = [];
        for(let i = 0; i < 4; i++){
            const obj = Object.create(answerObject);
            const computerAnswer = GameProps.ComputerAnswers[i];
            obj.color = computerAnswerList.index;
            obj.pos = i;
            computerAnswerList.push(obj);
        }
        //Lage liste over spillerens svar
        const playerAnswerList = [];
        for(let i = 0; i < 4; i++){
            //Kontrollere at brukeren har valgt 4 farger
            if(GameProps.playerAnswers[i] === null){
                return; //Avslutt funksjonen, brukeren mangler farger
            }
            const obj = Object.create(answerObject);
            const playerAnswer = GameProps.playerAnswers[i];
            obj.color = playerAnswer.index;
            obj.pos = i;
            playerAnswerList.push(obj);
        }
        console.log("Computer answer", computerAnswerList);
        console.log("Player answer", playerAnswerList);
        //Sjekke om vi har valgt riktig farge på riktig plass
        let answerColorHintIndex = 0;
        for(let i = 0; i<4; i++){
            const computerAnswer = computerAnswerList[i];
            const playerAnswer = playerAnswerList[i];
            if (computerAnswer.color === playerAnswer.color){
                console.log("riktig farge på riktig plass");
                console.log("Indeks", i);
                const pos = GameProps.answerHintRow[answerColorHintIndex++];
                //answerColorHIntIndex += 1;
                //answerColorHintIndex = answerColorHintIndex + 1;
                const colorHintSPI = SpriteInfoList.ColorHint;
                const colorHint = new libSprite.TSprite(
                    this.#spcvs,
                    colorHintSPI,
                    pos,
                );
                    colorHint.index = 1;
                    this.#colorHints.push(colorHint);
                    //Vi må ikke sjekke disse to fargene igjen
                    computerAnswer.checkThis = playerAnswer.checkThis = false;
                
            }
        }
        //Sjekke om vi har valgt riktig farge på feil plass.
        //Ytre for løkke sjekker spillerens svar
        for (let i = 0; i < 4; i++){
            const playerAnswer = playerAnswerList[i];
            // Hvis denne fargen skal sjekkes, sjekk mot alle computerens svar
            if(playerAnswer.checkThis){
                for(let j = 0; j < 4; j++){
                    const computerAnswer = computerAnswerList[j];
                    // sjekk omm denne fargen skal sjekkes
                    if(computerAnswer.checkThis && (playerAnswer.pos !== computerAnswer.pos)){
                        if(playerAnswer.color === computerAnswer.color){
                            console.log(`Rett farge på feil plass - {${playerAnswer.pos + 1}}`);
                            answerColorHintIndex = this.#createColorHint(answerColorHintIndex, 0);
                            //Vi må ikke sjekke disse to fargene igjen
                            computerAnswer.checkThis = playerAnswer.checkThis = false;
                        }
                    }
                }
            }
        }
       
  
    }//End of onCheckAnswer click
    
    //Privat metode, den bruker interne variabler og kan ikke kalles utenfra
    #createColorHint(posIndex, colorIndex){
        const pos = GameProps.answerHintRow[posIndex++];
        const colorHintSPI = SpriteInfoList.colorHint;
        const colorHint = new libSprite.TSprite(this.#spcvs, colorHintSPI, pos);
        colorHint.index = colorIndex;
        this.#colorHints.push(colorHint);
        return posIndex; //VI må returne den nye indeksen til posisjonen
    } //End of #createColorHint

     //Gå videre til neste runde
     #setNextRound(){
        this.#roundNumber++;
        const rowText = `Row${this.#roundNumber}`;

        GameProps.snapTo.positions = MastermindBoard.ColorAnswer[rowText];
        GameProps.answerHintRow = MastermindBoard.AnswerHint[rowText];
        moveRoundIndicator();
        for(let i = 0; i < 4; i++){
            GameProps.playerAnswers[i] = null;
        }

    //LAg en metode #setnextround som setter opp neste runde
     
    
}//END of class Tmenu