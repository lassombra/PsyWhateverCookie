export default function gearCost(count) {
	return Math.round(1000 * Math.pow(1.1, count), 0);
}