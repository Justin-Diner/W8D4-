const readline = require('readline')

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function addNumbers(sum, numsLeft, callBack) {
	if (numsLeft > 0) {
		reader.question('Please Input a Number', function(answer) {
			callBack(answer)
			addNumbers(sum,numsLeft-1,callBack)
		})
	} else if (numsLeft === 0){
		callBack(sum)
	}
}

function callBack(answer){
	let numAnswer =  parseInt(answer)
	sum+= numAnswer
	console.log(sum)
}


addNumbers(0,4,callBack)
