/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var area = area / 2;
console.log(area);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
var money = 45000;
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else if (money < 10000) {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 5;
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

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.pdf";
//write your code here
if (
  fileName.startsWith("#") ||
  fileName.endsWith(".pdf") ||
  fileName.endsWith(".docs")
) {
  console.log("Store");
} else if (
  !fileName.startsWith("#") ||
  !fileName.endsWith(".pdf") ||
  !fileName.endsWith(".docs")
) {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
// var student = { name: "Honolulu", roll: 2009, department: "Cse" };
//write your code here
student =
  student.name.toLowerCase() +
  parseInt(student.roll) +
  "." +
  student.department.toLowerCase();
student += "@ph.ac.bd";
console.log(student);

/** Problem 06 :  (Current Salary )  */
var experience = 2;
var startingSalary = 45000;
//write your code here
for (var i = 0; i < experience; i++) {
  startingSalary += startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2));
