let age = prompt("Enter your age:");
let hasPassedTest = prompt("Have you passed the driving test? (yes/no)");

age = Number(age); // Convert input to number
hasPassedTest = hasPassedTest.toLowerCase() === "yes"; // Convert "yes" to true, anything else is false

if (age > 18 && hasPassedTest) {
    console.log("You are eligible for a driving license.");
} else {
    console.log("You are NOT eligible for a driving license.");
}
