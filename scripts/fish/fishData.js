const fishCollection = [
    {
        saltWater: false,
        harvestLocation: "Minnesota",
        diet: "Cherry Tomatoes",
        name: "Frankie",
        species: "Piranha",
        inches: 7,
        image: "piranha.jpeg"
    },

    {
        saltWater: true,
        harvestLocation: "Texas",
        diet: "Dog Food",
        name: "Barbara",
        species: "Tuna",
        inches: 9,
        image: "yellowfin.jpeg"
    },

    {
        saltWater: false,
        harvestLocation: "Maldives",
        diet: "Shrimp",
        name: "Henry",
        species: "Blobfish",
        inches: 11,
        image: "blobfish.jpeg"
    },

    {
        saltWater: true,
        harvestLocation: "Moscow",
        diet: "Socks",
        name: "Samson",
        species: "Guppy",
        inches: 29,
        image: "guppy.jpeg"
    },

    {
        saltWater: false,
        harvestLocation: "East Side",
        diet: "Dust",
        name: "Shirley",
        species: "Goldfish",
        inches: 3,
        image: "goldfish.jpeg"
    },

    {
        saltWater: false,
        harvestLocation: "Backyard",
        diet: "Macaroni and Cheese",
        name: "Leonardo",
        species: "Siamese",
        inches: 785,
        image: "siamese.jpg"
    },
    {
        saltWater: false,
        harvestLocation: "Minnesota",
        diet: "Compost",
        name: "Syd",
        species: "Piranha",
        inches: 79,
        image: "piranha.jpeg"
    },

    {
        saltWater: true,
        harvestLocation: "Texas",
        diet: "Vegan Dog Food",
        name: "Barbarella",
        species: "Tuna",
        inches: 9,
        image: "yellowfin.jpeg"
    },

    {
        saltWater: false,
        harvestLocation: "Maldives",
        diet: "Vegan Shrimp",
        name: "Blobby",
        species: "Blobfish",
        inches: 1,
        image: "blobfish.jpeg"
    },

    {
        saltWater: true,
        harvestLocation: "Moscow",
        diet: "Dirty Socks",
        name: "Samsonite",
        species: "Guppy",
        inches: 26,
        image: "guppy.jpeg"
    },

    {
        saltWater: false,
        harvestLocation: "East Side",
        diet: "Vegan Dust",
        name: "Thelma",
        species: "Goldfish",
        inches: 3.6,
        image: "goldfish.jpeg"
    },

    {
        saltWater: false,
        harvestLocation: "Backyard",
        diet: "Vegan Macaroni and Cheese",
        name: "Leonardo the Third",
        species: "Siamese",
        inches: 7098,
        image: "siamese.jpg"
    },
    {
		saltWater: true,
		harvestLocation: "Sea World",
		diet: "Filet Mignon",
		name: "Willy",
		species: "Whale",
		inches: 5000,
		image: "whale.jpeg"
	},
    {
		saltWater: true,
		harvestLocation: "Lake Eerie",
		diet: "Burritos",
		name: "Sandra D.",
		species: "Goblin Shark",
		inches: 86753.09,
		image: "GoblinShark.jpeg"
	},



    
];







export const getFish = () => {
    return fishCollection;
};


export const getMostHolyFish = () => {
    const holyFishArray = [];

    for (const fishObj of fishCollection) {
        if(fishObj.inches % 3 === 0){
            holyFishArray.push(fishObj);
        }
    }

    return holyFishArray
};


export const getSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiersArray = [];
    for (const fishObj of fishCollection) {
        if (fishObj.inches % 5 === 0 && fishObj.inches % 3 !== 0) {
            soldiersArray.push(fishObj);
        }
    }
    return soldiersArray
};

export const getUnworthy = () => {
    // Any fish not a multiple of 3 or 5
    const unworthyArray = [];
    for (const fishObj of fishCollection) {
        if(!(fishObj.inches % 5 === 0 || fishObj.inches % 3 === 0)) {
            unworthyArray.push(fishObj);
    }
}
    return unworthyArray
};
