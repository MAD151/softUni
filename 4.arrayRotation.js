function solve(arr, n) { //n for num of rotation

    for (let i = 0; i < n; i++) {
        let element = arr.shift();
        arr.push(element)
        console.log(arr.join(' '));
    }
}
solve([51, 47, 32, 61, 21], 2) //output 32 61 21 51 47