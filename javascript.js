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


const bigmouth = 'I\'ve got no right to take my place...'#
console.log(bigmouth)