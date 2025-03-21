var num = 100;

function bottles99_song(){
    while (num >1){
        console.log( num + " bottles of beer on the wall, " + num + " bottles of beer");
        console.log("Take one down and pass it around, " + (num - 1) + " bottles of beer on the wall");
        num --;
    }
    console.log("1 bottle of beer on the wall, 1 bottle of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    
}

bottles99_song();