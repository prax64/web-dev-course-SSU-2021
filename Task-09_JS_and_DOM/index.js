import formulaPowOfSum from "/home/jconda/Sharaga/web-dev-course-SSU-2021/Task-09_JS_and_DOM/functions/Task_1.js"
import generatePassword from "/home/jconda/Sharaga/web-dev-course-SSU-2021/Task-09_JS_and_DOM/functions/Task_2.js"
import countVowels from "/home/jconda/Sharaga/web-dev-course-SSU-2021/Task-09_JS_and_DOM/functions/Task_3.js"

document.querySelector(".counter-execute-button").onclick = function() {
    document.querySelector(".counter-result").textContent = "Число гласных в строке: " + countVowels(document.getElementById("counter-input").value);
}

document.querySelector(".formula-execute-button").onclick = function() {
    document.querySelector(".formula-result").textContent = formulaPowOfSum(parseInt(document.getElementById("formula-input").value));
}

document.querySelector(".generator-execute-button").onclick = function() {
    document.querySelector(".generator-result").textContent = generatePassword();
}

document.querySelector(".counter-reset-button").onclick = function() {
    document.getElementById("counter-input").value = "";
    document.querySelector(".counter-result").textContent = " ";
}

document.querySelector(".formula-reset-button").onclick = function() {
    document.getElementById("formula-input").value = "";
    document.querySelector(".formula-result").textContent = " ";
}

document.querySelector(".generator-reset-button").onclick = function() {
    document.querySelector(".generator-result").textContent = " ";
} 
