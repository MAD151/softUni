// // program to reverse a string

function reverseString(str) {

    let word = String(str);
    let reverseWord = word.split("").reverse().join("");
    console.log(reverseWord);
}
reverseString('Hello')

function solve(wordInput) {

    let word = String(wordInput);
    let reverseWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i]
    }
    console.log("Reversed str is:", reverseWord);
}
solve('Maria')