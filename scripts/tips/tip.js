export const tips = (tipsObj) => {
	return (
	` <article class="tip-card">
    <h3 class="tipCategory">${tipsObj.Category}</h3>
    <ul>
        <li class="tip-details">${tipsObj.TipOne}</li>
        <li class="tip-details">${tipsObj.TipTwo}</li>
        <li class="tip-details">${tipsObj.TipThree}</li>
        <li class="tip-details">${tipsObj.TipFour}</li>
    </ul>
</article>`
	)
}