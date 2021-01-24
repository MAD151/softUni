//Write a function that finds the biggest of 3 numbers.
//The input comes as 3 parameters.
//The output is the biggest from the input numbers.

function solve(a, b, c) {

    console.log(Math.max(a, b, c))
}
solve(-2, 7, 3) //output 7

function solve(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
    console.log(largest)
}
solve(-22, -7, -3) //output 7

