export const location = (locationObj) => {
	return (
	` <article class="location-card">
    <ul>
        <li class="harvest-details">Location: ${locationObj.Location}</li>
        <li class="harvest-details">Climate: ${locationObj.Climate}</li>
        <li class="harvest-details">Duration: ${locationObj.Duration}</li>
    </ul>
</article>`
	)
}

