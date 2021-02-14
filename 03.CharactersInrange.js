//You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 

function charInRange(a, b) {

    let first = a.charCodeAt();
    let second = b.charCodeAt();

    function charsInLine(x, y) {
        let line = '';

        for (let i = x + 1; i < y; i++) {
            line += String.fromCharCode(i) + ' ';
        }
        return line;
    }
    return first > second ? charsInLine(second,first) : charsInLine(first,second)
}
let result = charInRange('f', 'a');
console.log(result);
