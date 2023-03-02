const { rawListeners } = require('process');
const readline = require('readline')

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function addNumbers(sum, numsLeft, callBack) {
	if (numsLeft > 0) {
		reader.question('Please Input a Number', function(answer) {
			callBack(sum, answer);
			addNumbers(sum,numsLeft-1,callBack);
		});
		
	} else if (numsLeft === 0){
		callBack(sum);
	}
}

function callBack(sum, answer){
	let numAnswer =  parseInt(answer);
	sum += numAnswer;
	console.log(sum)
	return sum;
}


addNumbers(0,4,callBack)
