const prompt = require("prompt-sync")({ sigint: true });
let riggedNumber = Number(
  prompt(console.log("Please enter your rigged number: "))
);

let roll = Math.ceil(Math.random()*7)

if (roll === 7) {
    console.log(riggedNumber)
} else {
    console.log(roll)
}
// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let num4 = 4;
// let num5 = 5;
// let num6 = 6;

// if ((riggedNumber = num1)) {
//   console.log(Math.floor(Math.random() * 6) + 1);
// } else if ((riggedNumber = num2)) {
//   console.log(Math.floor(Math.random() * 6) + 1);
// } else if (riggedNumber = num3){

// } else if (riggedNumber = num4){

// } else if (riggedNumber = num5){

// } else if (riggedNumber = num6){}



