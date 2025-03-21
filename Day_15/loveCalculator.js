var name1= prompt("Enter a Name");
var name2= prompt("Enter Another Name");
var num = Math.random();
num *= 100;
var num_percent= Math.floor(num)+1;
console.log(name1 + " and " +  name2 + " have " +  num_percent)

if (num_percent > 70){
    console.log("You have great compatibility")
} else{
    console.log("Try again")
}
