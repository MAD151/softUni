function solve(firstArr,secondArr) {

    //Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare the first array with the second array.

    for (const element of firstArr) {
        for (const secondEl of secondArr) {
            if (element === secondEl) {
                console.log(element);
            }
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']); // output hello, 4