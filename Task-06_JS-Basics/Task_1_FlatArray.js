function toFlatArray(array){
    return  array.flat(Infinity).sort();
}

console.log("6.1. Плоский массив");
console.log(toFlatArray([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]).toString());
console.log(toFlatArray([]).toString());
console.log(toFlatArray([[], []]).toString());
console.log(toFlatArray([[], [1]]).toString());
console.log(toFlatArray([[1, 3, 5], [-100], [2, 4, 6]]).toString());