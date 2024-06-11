let fibArr = [0, 1];

function fibs(num) {
    if (num <= 0) return -1;
    if (num <= 2) return num - 1;
    for (let i = 2; i < num; i++) fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    return fibArr;
}

/*  Attempt to optimize recalculation of the same fib.numbers by memoization.
    First attempt. Because we need to return an array at the end of our function, my first thought was
    "Well, recursive function should return an array, then", but dragging around whole arrays when we need
    just a few numbers is suboptimal. It IS faster than naive algorith, but it would be better to do this
    in 2 separate function calls: first that calculates fib.numbers, and the other that just prints an array.

//  first attempt
let fibArr = [0, 1];
function fibsRec(fibNums) {
    if (fibNums <= 0) return -1;
    if (fibNums <= 2) return fibArr.slice(0, fibNums);
    else {  // if the value's calculated already
        if (fibArr[fibNums - 1]) return fibArr.slice(0, fibNums);
        else {
            let firstTemp = fibsRec(fibNums - 1);
            let secondTemp = fibsRec(fibNums - 2);
            fibArr[fibNums - 1] =
                firstTemp[firstTemp.length - 1] +
                secondTemp[secondTemp.length - 1];
            return fibArr.slice(0, fibNums);
        }
    }
}   */

//  second attempt
function fibsRec(totalFibNums) {
    calcFibNumsRec(totalFibNums);
    return fibArr;
}

function calcFibNumsRec(fibNum) {
    if (fibNum <= 0) return -1;
    if (fibNum <= 2) return fibNum - 1;
    else {
        // if the value's calculated already - return it
        if (fibArr[fibNum - 1]) return fibArr[fibNum - 1];
        else {
            // otherwise - calculate and return
            return (fibArr[fibNum - 1] =
                calcFibNumsRec(fibNum - 1) + calcFibNumsRec(fibNum - 2));
        }
    }
}

console.log(fibsRec(8));
