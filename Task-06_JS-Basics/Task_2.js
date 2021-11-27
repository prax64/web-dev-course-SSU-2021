function strToBits(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2).padStart(8,'0');;
    }).join(' ');
}

console.log("6.2. Бинарное слово");
console.log(strToBits("man"));
console.log(strToBits("cat"));