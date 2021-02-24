/* 
You will be given an array of integer numbers on the first line of the input (space-separated). Remove all repeating elements from the array. Print the result elements separated by single space.

function distinctArray(arr) {

    let n = arr.filter((a, b) => arr.indexOf(a) === b)
    console.log(n.join(' '));
    
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]) //7 8 9 2 3 4 1 */


//Write a function that sorts an array of numbers so that the first //element is the biggest one, the second is the smallest one, the //third is the second biggest one, the fourth is the second smallest //one and so on. 
//    Print the elements on one row, separated by single space.

function solve(input) {

    let result = [];
    let array = input.sort((a, b) => a - b);
    while (array.length !== 0) {
        result.push(array[array.length - 1]) && array.pop();
        result.push(array[0]) && array.shift();
    }
    console.log(result.join(' '));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
//94 1 69 2 63 3 52 18 31 21