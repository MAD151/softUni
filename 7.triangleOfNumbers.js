//Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples. - n will be in the interval [1...20].

function drawTriangle(numInput) {

    let num = +numInput;
    let m, n;

    for(m = 1; m<=num; m++){
        for (n = 1; n<=m; n++) {
            console.log(""+m+" ");
        }
    }
}
drawTriangle(5)