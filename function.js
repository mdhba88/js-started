// const number = 89;

// //function declaration:-
// function myAi() {
//   console.log("Light bondho kor.");
//   console.log("Ei fan chalu kor, amar gorom lage.");
//   console.log("Amake dokan theke fol ene dao.");
// }

// //call the function:-
// myAi();

// function sumCalc(x, y) {
//   const sumCalculating = x + y;
//   return sumCalculating;
// }
// const result = sumCalc(3, 5);
// console.log(result);
// function square(number) {
//   console.log("The number is: " + number);
//   console.log("Square result: " + number * number);
// }
// square(67);

function oddNumCalc(oddRealNumber) {
  let oddNumAllResult = 0;
  // let oddAllCalc = [];
  for (const num of oddRealNumber) {
    if (num % 2 === 0) {
      console.log(num);
      // oddAllCalc.push(num);
      oddNumAllResult = oddNumAllResult + num;
    }
  }
  return oddNumAllResult;
}
const oddRealNumber = [2, 5, 6, 9, 22];
const oddFunCall = oddNumCalc(oddRealNumber);
console.log("The result is: " + oddFunCall);
