
import { fish } from "./fish.js";

import { getFish } from "./fishData.js";

export const fishList = () => {
	const allFish = getFish();
	const DOMLocation = document.querySelector("#list");
	let fishRep = "";

	for(const thatOneFish of allFish){
		fishRep += fish(thatOneFish);
		console.log("fishRep", fishRep);
	}
	console.log ("fishRep", fishRep);

	DOMLocation.innerHTML = fishRep;

 }
 