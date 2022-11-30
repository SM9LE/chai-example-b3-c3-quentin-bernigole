class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(sideA, sideB, sideC, hauteur) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.hauteur = hauteur;
    }

    isRightAngledTriangle () {
        let result1 = Math.pow(this.sideC, 2);
        let result2 = Math.pow(this.sideA, 2);
        let result3 = Math.pow(this.sideB, 2);

        if (result1 === result2 + result3)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    getSurfaceRightAngledTriangle () {
        return (this.sideA * this.sideB) / 2;
    }

    isIsocelesTriangle () {
        if (this.sideA === this.sideB || this.sideB === this.sideA && this.sideB === this.sideC && this.sideA === this.sideB)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    getSurfaceAnyTriangle () {
        return (this.sideA * this.hauteur)/2
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}