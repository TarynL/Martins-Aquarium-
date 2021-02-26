const tankTips = [
    {
        Category: "Tank Cleaning",
        TipOne: "Remove algae",
        TipTwo: "Vacuum the substrate",
        TipThree: "Clean the filter",
        TipFour: "Refill the water"
       
    },

    {
        Category: "Water Salinity",
        TipOne: "Best to maintain salinity level of 1.026",
        TipTwo: "Know where your fish is from",
        TipThree: "Too high and your fish could die",
        TipFour: "Temperatur can affect this"
       
    },

    {
        Category: "Temperature",
        TipOne: "A good range is 76° to 80°F",
        TipTwo: "A few species need to be kept several degrees warmer",
        TipThree: "Some species require temperatures a few degrees cooler",
        TipFour: "A thermometer is vital"
       
    },

]
  
    export const getTips = () => {
        return tankTips;
    }

    