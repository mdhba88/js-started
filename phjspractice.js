//programming hero conditional repository practice

//free drinks problem solving
/* let burgerPrice = 501;
if (burgerPrice > 500) {
  console.log("Wow! You got a free drinks.");
} else {
  console.log("If you add drinks: paying 30tk");
} */

//BMI calculation
/* let bmiWeight = 190;
let bmiHeight = 5.3;
let bmiResult = bmiWeight / (bmiHeight * bmiHeight);
console.log(bmiResult.toFixed(2));
if (bmiResult < 18.9) {
  console.log("you are underweight");
} else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
  console.log("you are normal");
} else if (bmiResult >= 25 && bmiResult <= 29.9) {
  console.log("you ate overweight");
} else {
  console.log("you are obese");
}
 */

//Grade calculation
/* let gradePoint = 0;
if (gradePoint >= 90 && gradePoint <= 100) {
  console.log("Great: A");
} else if (gradePoint >= 80 && gradePoint <= 89) {
  console.log("Great: B");
} else if (gradePoint >= 70 && gradePoint <= 79) {
  console.log("Great: C");
} else if (gradePoint >= 60 && gradePoint <= 69) {
  console.log("Great: D");
} else if (gradePoint >= 0 && gradePoint <= 59) {
  console.log("Failed");
} else {
  console.log("Put your marks");
} */

//grade calculation using ternary operator
/* let gradePoint = 0;
gradePoint >= 90 && gradePoint <= 100
  ? console.log("Grade: A")
  : gradePoint >= 80 && gradePoint <= 89
  ? console.log("Grade: B")
  : gradePoint >= 70 && gradePoint <= 79
  ? console.log("Grade: C")
  : gradePoint >= 60 && gradePoint <= 69
  ? console.log("Grade: D")
  : gradePoint >= 0 && gradePoint <= 59
  ? console.log("Failed")
  : console.log("Put your marks"); */

//my and my friends marks comparison then actions using "if else"
/* let yourScore = 80; //my score
let friendsScore = 30; //my friends score
if (yourScore >= 80) {
  if (friendsScore > 80) {
    console.log("go for lunch");
  } else if (friendsScore > 60) {
    console.log("good luck for next time");
  } else if (friendsScore > 40) {
    console.log("keep friend's message unseen");
  } else {
    console.log("block your friend");
  }
} else {
  console.log("go home, sleep and act sad");
} */

//my and my friends marks comparison then actions using "ternary operator"
/* let myScore = 70;
let friendScore = 50;
myScore >= 80
  ? friendScore >= 80
    ? console.log("go for lunch")
    : friendScore >= 60
    ? console.log("good luck for next time")
    : friendScore >= 40
    ? console.log("keep friend's message unseen")
    : console.log("block your friends")
  : console.log("go home, sleep and act sad"); */

// ternary numbers used if else
/* let num1 = 10;
let num2 = 20;
if (num1 > num2) {
  console.log(num1 * 2);
} else {
  console.log(num1 + num2);
} */

// ternary numbers used ternary operator
/* let num1 = 90;
let num2 = 20;
num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2); */

//bus fare calculator using ternary operator
/* let age = 61;
let ticketPrice = 757;
let ticketPercentage = (ticketPrice * 15) / 100;
age <= 10
  ? console.log("Free Entry")
  : age <= 60
  ? console.log(ticketPrice - parseInt(ticketPercentage))
  : console.log("Regular ticket fare 800 tk"); */
