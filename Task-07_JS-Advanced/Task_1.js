ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function toPhoneNumber(array){
    if (!Array.isArray(array) || array.length != 10 || !array.every(el => Number.isInteger(el) && el >= 0 && el <= 9 ))
        return "Invalid input";
    else
        return `+7 (${array[0]}${array[1]}${array[2]}) ${array[3]}${array[4]}${array[5]}-${array[6]}${array[7]}-${array[8]}${array[9]}`;
}

console.log("7.1. Форматирование телефонного номера");
console.log(toPhoneNumber([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]).toString());
console.log(toPhoneNumber([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]).toString());
console.log(toPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]).toString());
console.log(toPhoneNumber([]).toString());
console.log(toPhoneNumber("aw93fha=").toString());