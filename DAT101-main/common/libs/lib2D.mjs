"use strict";
/**
 * @library lib2D
 * @description A library for classes that manage 2D graphics.
 */

//Lag en klassse TPoint med en konstruktør som tar inn x- og y-koordinater

//(Super klasse)
class TPoint{
    x = 0;
    y = 0;
    constructor (aX, aY){
        this.x = aX;
        this.y = aY;
    }
}

/* Lag en klasse TPosition som arver fra TPoint som har en konstruktør som tar inn x- og y-koordinater.
En duplikat funksjon "clone" som returnerer en ny instans av TPosition
med samme x- og y-koordinater.
En funksjon for å finne avstand mellom to TPoint objekter */

//(Sub klasse til super klassen)

class TPosition extends TPoint{
    constructor(aX, aY){
        super(aX, aY);
    }

    clone(){
        return new TPosition(this.x, this.y);
    }

    distanceToPoint(apoint){
        const dx = this.x - aPoint.x;
        const dy = this.y - aPoint.y;
        return Maths.hypot(dx, dy);

    }

} //End of TPosition class

export default {
    /**
     * @class TPoint
     * @description A class representation for an x and y point in 2D.
     * @param {number} aX - the x-coordinate.
     * @param {number} aY - the y-coordinate.
     */
    TPoint,
    /**
     * @class TPosition
     * @description A position class for manipulation of point in 2D.
     * @param {number} aX - the x-coordinate.
     * @param {number} aY - the y-coordinate.
     * @extends TPoint
     * @method clone - A method to clone the position object.
     * @method distanceToPoint - A method to calculate the distance to another point.
     */
    TPosition
}



