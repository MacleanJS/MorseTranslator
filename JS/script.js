import { text, morse } from "./dic-objects.js";
import { transStringToMorse } from "./text-to-morse.js";
import { transStringToText } from "./morse-to-text.js";

const textInput = document.getElementsByClassName("translate-text");
textInput[0].addEventListener("click", () => {
    const textText = document.getElementsByClassName("input-text")[0].value; //Takes user inputted string
    console.log("Text: ", textText);
    document.getElementsByClassName("text-to-morse-output")[0].textContent =
        transStringToMorse(textText, text); // sends string + text "dictionary" to transString
});

const morseInput = document.getElementsByClassName("translate-morse");
morseInput[0].addEventListener("click", () => {
    const morseText = document.getElementsByClassName("input-morse")[0].value;
    console.log("Morse: ", morseText);
    document.getElementsByClassName("morse-to-text-output")[0].textContent =
        transStringToText(morseText, morse);
});
