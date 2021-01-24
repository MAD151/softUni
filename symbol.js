function calculator(firstNumber, simbolChar, secondNumber) {
 
    switch (simbolChar) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    }
    console.log(result.toFixed(2));
}
calculator(25.5, '-', 3); //22.50