import { mapInfo } from "./map.js";


var displayOptions = {
	width: 50,
	height: 50,
	fontSize: 24,
	bg: "black",
	forceSquareRatio: true
	
}
var display = new ROT.Display(displayOptions);
document.body.appendChild(display.getContainer());

display.draw(5,4,"@");
export {display}


