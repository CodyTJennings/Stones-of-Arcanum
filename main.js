import { Map } from "./map.js";
import { Tile, Floor, Wall } from "./tile.js";




function run()
{
	const displayOptions = {
	width: 50,
	height: 50,
	fontSize: 24,
	bg: "black",
	forceSquareRatio: true
	
}

const display = new ROT.Display(displayOptions);
const w = 50; //width of the map
const h = 50; //height of the map

const mapInfo = new Map(w, h, initTiles(w, h));


const digger = new ROT.Map.Digger(w,h);   //create a digger map object

let userCallback = function(x, y, value) {
    if (value == 0){
        mapInfo.tiles[y][x] = new Floor(x, y);
    }
    else if (value == 1){
        mapInfo.tiles[y][x] = new Wall(x, y);
    }

}
function displayMap(map, display){
    for(let row = 0; row < map.mapWidth; row++){
        for(let column = 0; column < map.mapHeight; column++){
            display.draw(mapInfo.tiles[row][column].x, mapInfo.tiles[row][column].y, mapInfo.tiles[row][column].sprite);
        }
    }
}
function initTiles(mw, mh){  //creates a 2d array made up of Tiles
        const tiles = [];

        for(let row = 0; row < mw; row++){
            tiles[row] = [];
            for(let column = 0; column < mh; column++){
                tiles[row][column] = new Tile(column, row);
            }
        }

        return tiles;
    }
digger.create(userCallback);
displayMap(mapInfo, display);
document.body.appendChild(display.getContainer());

}





document.addEventListener('DOMContentLoaded', run);

