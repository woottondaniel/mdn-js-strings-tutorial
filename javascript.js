// following https://www.theodinproject.com/lessons/foundations-data-types-and-conditionals

// exercises from https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings

const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString)

const single = 'single quotes';
const double = "double quotes";
const backtick = `backtick`;
console.log(single);
console.log(double);
console.log(backtick);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`
console.log(joined)

// press me button

const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet)

const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2)

const greeting3 = "Howdy";
const name3 = "Your Majesty";
console.log(`${greeting3}, ${name3}!`)

//expressions in strings:

const song = "1979";
const artist = "Smashing Pumpkins";
const score = 9.5;
const highestScore = 10;
const output = `I like the song ${song} by ${artist}. I gave it a score of ${
    (score / highestScore) * 100
}%.`
console.log(output)

//multiline strings

const newLine = `One day you finally knew
what you had to do, and began, `;
console.log(newLine)

const newLine2 = "One day you finally\nknew what you\nhad to do,\nand began, "
console.log(newLine2)

const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth)

// now doing exercises from https://www.w3schools.com/js/js_string_methods.asp

let text = "Hello world!";
let char = text.charAt(0);
console.log(char);

let code = text.codePointAt(0);
console.log(code)

//codepointat is the unique code of the character and H is code 72 so you get 72

const name4 = "W3Schools";
let letter = name4[2]; // or name.at(2) for same result

console.log(letter)

let text2 = "hola".concat(" ", "mi amigo")
console.log(text2)

let text5 = "Apple, Banana, Kiwi";
let part = text5.slice(7, 13);
console.log(part)

let text6 = text5.toUpperCase()
console.log(text6)

let text7 = name4.repeat(2)
console.log(text7)

let text8 = text5.replace("Banana", "BonBonBonBons")
console.log(text8)

// following this on conditionals https://www.w3schools.com/js/js_if_else.asp

const now = new Date();
console.log(now.toDateString())
