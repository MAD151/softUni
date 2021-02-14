// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position

function solve(array) {

    let firstSum = 0;

    for (const num of array) {
        firstSum += num;
    }

    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            array[index] = array[index] + index;
        } else {
            array[index] = array[index] - index
        }
    }
    console.log(array)
    console.log(firstSum)

    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(array.reduce(reducer)); //formula print the sum of numbers from the original array

}
solve([5, 15, 23, 56, 35]);
//output [ 5, 14, 21, 59, 31 ] newly modified array
134 //print the sum of numbers from the original array =>done
130 //sum of numbers from the modified array.