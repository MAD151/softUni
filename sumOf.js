//Write a function which will be given a single number. Your task is to find the sum of its digits.

function digitSum(n) {
    
	let sum = 0;
	let string = n.toString();

	for(i=0; i < string.length; i++){
		sum = sum + parseInt(string.substring(i, i+1));
    }
    console.log(sum)
}
digitSum(245678)

