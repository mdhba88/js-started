/** Problem -03 ( Medicine Planner ) */
var lastDay = 27;
//write your code here
for (var i = 1; i <= 30; i++) {
  if (i === lastDay) {
    if ((i - 3) % 3 === 0) {
      console.log(i + " - " + "medicine");
    } else {
      console.log(i + " - " + "rest");
    }
  }
}
