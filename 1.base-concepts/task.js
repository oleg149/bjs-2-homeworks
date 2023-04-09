"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discr = (b ** 2) - (4 * a * c);

	if (discr === 0) {
		let sqrt = -b / (2 * a);
		arr.push(sqrt);
		console.log(arr);
	} else if (discr > 0) {
		let sqrt1 = (-b + Math.sqrt(discr)) / (2 * a);
		let sqrt2 = (-b - Math.sqrt(discr)) / (2 * a);
		arr.push(sqrt1, sqrt2);
		console.log(arr);
	} else if (discr < 0) {
		return [];
	}
	return arr;

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	function isNumber(percent, contribution, amount, countMonths) {
		if (typeof percent, contribution, amount, countMonths != "string") return false;
		return !isNaN(arguments) && !isNaN(parseFloat(arguments))
	}

	let transformPercent = percent / 100;
	let bodyCredit = amount - contribution;
	let monthPercent = transformPercent / 12;
	let everymonthPay = bodyCredit * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
	let totalPay = everymonthPay * countMonths;
	return +totalPay.toFixed(2);
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));