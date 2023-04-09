"use strict"

function solveEquation(a, b, c) {
<<<<<<< HEAD
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
		arr.push();
	}
	return arr;

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	function isNumber(percent, contribution, amount, countMonths) {
		if (typeof percent, contribution, amount, countMonths != "string") return false;
		return !isNaN(percent, contribution, amount, countMonths) && !isNaN(parseFloat(percent, contribution, amount, countMonths))
	}

	let transformPercent = percent / 100;
	let bodyCredit = amount - contribution;
	let monthPercent = transformPercent / 12;
	let everymonthPay = bodyCredit * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
	let totalPay = everymonthPay * countMonths;
	return +totalPay.toFixed(2);
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
=======
  let arr = [];
    let D = b * b - 4 * a * c;
    if (D < 0) {
        arr.push();
    } if(D == 0) {
        let oneRoot = (-b + Math.sqrt(D)) / (2 * a);
        arr.push(oneRoot);
    } else if(D > 0) {
        let twoRoots = [];
        twoRoots.push((-b + Math.sqrt(D)) / (2 * a));
        twoRoots.push((-b - Math.sqrt(D)) / (2 * a));
        arr.push(twoRoots[0], twoRoots[1]);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) { 
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let monthPay = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  let totalSum = monthPay * countMonths;
  let sumNumber = totalSum.toFixed(2);
      sumNumber = Number(sumNumber);
  return sumNumber;
}
>>>>>>> 2ca176558b5ceb8884d862c5430f479a7564fa62
