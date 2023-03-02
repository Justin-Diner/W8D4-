const readline = require('readline')

const reader = readline.createInterface({
	input: process.stdin, 
	output: process.stdout
});

function addNumbers(sum, numsLeft, callBack) {
	if (numsLeft > 0) {
		reader.question('Please Input a Number', function(answer) {
			return callBack(answer);
		})
	} else if (numsLeft === 0)
}

