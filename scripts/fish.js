export const fish = (fishObj) => {
	return (
	` <article class="fish-card">
    <div><img class="fish-image" src="images/${fishObj.image}" /></div>
    <h3 class="fish-name">${fishObj.name}</h3>
    <ul>
        <li class="details">${fishObj.species}</li>
        <li class="details">Length in Inches: ${fishObj.inches}</li>
        <li class="details">Harvest Location: ${fishObj.harvestLocation}</li>
        <li class="details">Diet: ${fishObj.diet}</li>
    </ul>
</article>`
	)
}
