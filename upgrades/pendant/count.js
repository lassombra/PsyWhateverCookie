export default function count(number) {
	return {
		perSecondScore: 100*number,
		clickScore: Math.floor(0.5 * number)
	}
}