
import { fish } from "./fish.js";

import { getFish } from "./fishData.js";

export const fishList = () => {
	const allFish = getFish();
	const DOMLocation = document.querySelector("#fishList");
	let fishRep = "";

	for(const thatOneFish of allFishes){
		fishRep += Fish(thatOneFish
);
	}
	console.log("fishRep", fishRep);

	DOMLocation.innerHTML = fishRep;

 }