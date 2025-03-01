var weight = prompt("Enter your weight in kg: ");
var height = prompt("Enter your height in meter: ");
function bmiCalculator(weight, height) {
    bmi = Math.round(weight/(height*height));
    return bmi;
}
var bmi = bmiCalculator(weight, height);
console.log("Your BMI is: " +bmi);
