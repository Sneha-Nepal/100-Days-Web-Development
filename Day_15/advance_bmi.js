var weight = prompt("Enter your weight");
var height = prompt("Enter your height");

function bmiCalculator(height, weight){
    bmi = Math.round(weight/(height*height));
    if (bmi >= 24.9){
        return "Your BMI is " + bmi + ", so you are overweight.";
    }else if (bmi >= 18.5 && bmi < 24.9){
        return "Your BMI is " + bmi + ", so you have a normal weight.";      
    }else{
        return "Your BMI is " + bmi + ", so you are underweight.";
    }
}

console.log(bmiCalculator(height, weight));
