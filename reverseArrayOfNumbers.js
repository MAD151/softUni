//Write a program which receives a number n and an array of elements. Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.

function reverseArrayOffNumbers(n, numbers) {
    let nNumbers = []; //new array with n numbers
    for (let index = 0; index < n; index++) {
        nNumbers.push(numbers[index]);
    }
    let reversed = []; //reverse it
    for (let index = nNumbers.length - 1; index >= 0; index--) {
        reversed.push(numbers[index]);
    }
    console.log(reversed.join(' ')); //print its elements on a single line, space separated.

}
reverseArrayOffNumbers(3, [10, 20, 30, 40, 50]) //30 20 10


//4.Reverse an Array of Strings
//Write a program which receives an array of strings (space separated values). Your task is to reverse it and print its elements. Swap elements. 

function reverseString(arr) {

    let reversed = arr.reverse();
    console.log(reversed.join(' '));
}
reverseString(['a', 'b', 'c', 'd', 'e']) //e d c b a 

//5.Sum Even Numbers
//Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.

function reverseString(arr) { // convert arr str to arr numbers
    for (let index = 0; index < arr.length; index++) {
        arr[index] = Number(arr[index]);
    }
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        let current = arr[index];
        if (current % 2 === 0) {
            sum += current;
        }
    }
    console.log(sum)
}
reverseString(['1', '2', '3', '4', '5', '6']) //12

//shorter option using arr.map
function reverseString(arr) {
    let result = arr.map(Number);
    let sum = 0;
    for (let index = 0; index < result.length; index++) {
        let current = result[index];
        if (current % 2 === 0) {
            sum += current;
        }
    }
    console.log(sum)
}
reverseString(['1', '2', '3', '4', '5', '6']) //12






