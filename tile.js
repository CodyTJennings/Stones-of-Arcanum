class Tile{         //Tile class with the tile's x and y location, sprite, and whether it is passable by other objects

	constructor(x, y, sprite, passable){

        this.x = x;

        this.y = y;

        this.sprite = sprite;

        this.passable = passable;

	}
}

class Floor extends Tile{ //Floor class that always has sprite - and is passable

    constructor(x,y){

        super(x, y, "-", true);

    };

}


class Wall extends Tile{  //Wall class that always has sprite # and is not passable

    constructor(x, y){

        super(x, y, "#", false);

    }

}

export {Tile, Floor, Wall};