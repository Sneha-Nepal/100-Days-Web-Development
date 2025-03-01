function lifeInWeeks(age) {

        var ageRemaining = 90 - age;
        var days = ageRemaining * 365;
        var months = ageRemaining * 12;
        var weeks = ageRemaining * 52;
    
        console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
        
    }
    