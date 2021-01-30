//Write a function that receives an array of strings and prints the sum of first and last element in that array.

function solve(arr) {

    let firstElement = arr[0] //firstElement
    let lastElement = arr.slice(-1)[0] //lastElement 
    console.log(firstElement + lastElement)

}
solve([20, 30, 40]) //60

//Write a program which receives a number and prints the corresponding name of the day of week. If the number is NOT a valid day, print 'Invalid day!'.

function weekDay(day) {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (day >= 1 && day <= 7) {
        console.log(days[day - 1])
    } else {
        console.log('Invalid day!')
    }
}
weekDay(3)


