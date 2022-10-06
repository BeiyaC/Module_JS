// you can write js here
console.log('hello from file');
let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

let celsius = kelvins - 273; // We subtract to obtain celsius value
let fahrenheits = Math.floor(celsius * (9/5) + 32); // We use floor method to obtain an int for fahrenheits

console.log(celsius, fahrenheits);
