
import { fish } from "./fish.js"

import { getFish, getMostHolyFish, getSoldierFish, getUnworthy } from "./fishData.js";

export const fishList = () => {
	const holyFish = getMostHolyFish();
	const soldierFish = getSoldierFish();
	const unWorthyFish = getUnworthy();

	const allFish = holyFish.concat(soldierFish, unWorthyFish);


	const DOMLocation = document.querySelector("#list");
	let fishRep = "";

	for(const thatOneFish of allFish){
		fishRep += fish(thatOneFish);
		console.log("fishRep", fishRep);
	}
	console.log ("fishRep", fishRep);

	DOMLocation.innerHTML = fishRep;

 }
 