function countVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

console.log("6.3. Подсчёт гласных");
console.log(countVowels("qwertyuiopasdfghjklzxcvbnm"));