function getArrayParams(...arr) {
  let max = Math.max(...arr);
	let min = Math.min(...arr);
	let sum = [...arr].reduce(function(a, b) {
		return a + b;
	});
	let avg = sum / arr.length;
  avg = +avg.toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg, 
	};
}


function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return arr.reduce(function(sum, elem) {
		return sum + elem;
	}, 0);
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return arr.length ? (Math.max(...arr) - Math.min(...arr)) : 0;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result
		}
	}
	return maxWorkerResult;

}
