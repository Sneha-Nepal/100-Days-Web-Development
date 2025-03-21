var year = prompt("Enter a year");

function leapYear(year) {
    if (year % 4 == 0){
        if(year % 100==0){
            if (year % 400==0){
                return "Leap Year.";
            }else{
                return "Not a Leap Year.";
            }
        }else{
            return "Leap Year.";
        }
    }else{
        return "Not a Leap Year.";
    }
    
}

console.log(leapYear(year));