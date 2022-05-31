const prompt = require('prompt-sync')({sigint: true});

let diceSides = Number(prompt(console.log("Please enter the number sides you would like your dice to have: ")))

console.log("Your " + diceSides + " sided die rolls a " + Math.floor((Math.random()*diceSides) + 1) +"!")