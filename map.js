import { display } from "./main.js";
import { Tile, Floor, Wall } from "./tile.js";


let w = 40; //width of the map
let h = 25; //height of the map

class Map{          //a class that contains the width and height of the map, represented by tiles
    constructor(mapWidth, mapHeight){
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
        
        
    }

    initTiles(mw, mh){  //creates a 2d array made up of Tiles
        const tiles = [];

        for(let row = 0; row < mw; row++){
            tiles[row] = [];
            for(let column = 0; column < mh; column++){
                tiles[row][column] = new Tile(column, row);
            }
        }

        this.tiles = tiles;
    }
}

let mapInfo = new Map(w, h);
mapInfo.initTiles(w, h);

let starterRotMap = new ROT.Map.Digger(w,h);   //create a digger map object



let userCallback = function(x, y, value) {
    if (value == 0){
        mapInfo.tiles[y][x] = new Floor(x, y);
    }
    else if (value == 1){
        mapInfo.tiles[y][x] = new Wall(x, y);
    }
    
    
}
starterRotMap.create(userCallback);
console.log(mapInfo.tiles);
//displayMap(mapInfo, display);

function displayMap(map, display){
    for(let row = 0; row < map.mapWidth; row++){
        for(let column = 0; column < map.mapHeight; column++){
            display.draw(mapInfo.tiles[row][column].x, mapInfo.tiles[row][column].y, mapInfo.tiles[row][column].sprite);
        }
    }
}

export {mapInfo}