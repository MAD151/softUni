//Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400

function leapYear(input) {

    let year = Number(input);
    let answer = ''
    
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        answer = "yes";
    } else {
        answer = "no";
    }
    console.log(answer);
}
leapYear(1999);