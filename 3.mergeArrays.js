function solve(firstArr, secondArr) {

    // two string arrays and merges into a third array.  
    // •	index even, add into the third array the sum of both elements at that index
    // •	index of the element is odd, add the concatenation of both elements at that index

    let thirdArr = []

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            let sum = Number(firstArr[i]) + Number(secondArr[i]);
            secondArr[i];
            thirdArr.push(sum)
        } else {
            let contact = firstArr[i] + secondArr[i]
            thirdArr.push(contact);
        }
    }
    console.log(thirdArr.join(' - '))
}
solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])