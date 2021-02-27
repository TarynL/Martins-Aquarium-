import { location } from "./location.js"

import { getLocation } from "./locationData.js";

export const locationList = () => {
	const allLocations = getLocation();
	const DOMLocation = document.querySelector("#locationList");
	let locationRep = "";

    for(const thatOneLocation of allLocations){
        locationRep += location(thatOneLocation);
        console.log("locationRep", locationRep);
    }

DOMLocation.innerHTML = locationRep;

	

 }