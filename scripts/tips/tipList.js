
import { tips } from "./tip.js"

import { getTips } from "./tipData.js";

export const tipList = () => {
	const allTips = getTips();
	const DOMLocation = document.querySelector("#tipList");
	let tipRep = "";

    for(const thatOneTip of allTips){
        tipRep += tips(thatOneTip);
        console.log("tipRep", tipRep);
    }

DOMLocation.innerHTML = tipRep;

	

 }


