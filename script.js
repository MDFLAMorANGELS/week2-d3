var fs = require('fs');
var array = fs.readFileSync('list.txt', {encoding: 'utf8'}).split(" ");
var arrayInt = array.map(function (x) { 
    return parseInt(x, 10); 
  });

  function merge(left, right) {
    let arr = [];
    let comparisons = 0;

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
        comparisons++;
    }

    return {
        array: [...arr, ...left, ...right],
        comparisons: comparisons
    };
}

function mergeSort(array) {
    const half = array.length / 2;

    if (array.length < 2) {
        return {
            array: array,
            comparisons: 0
        };
    }

    const left = array.splice(0, half);
    const leftResult = mergeSort(left);
    const rightResult = mergeSort(array);
    const mergeResult = merge(leftResult.array, rightResult.array);

    return {
        array: mergeResult.array,
        comparisons: leftResult.comparisons + rightResult.comparisons + mergeResult.comparisons
    };
}

const result = mergeSort(arrayInt);
console.log(`Tri fusion: ${result.comparisons} comparaisons - [${result.array}]`);