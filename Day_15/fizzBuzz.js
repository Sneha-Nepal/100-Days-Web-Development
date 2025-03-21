var num_list = [];
count = 1;

function fizzBuzz(){
    while(count <= 100){
        if(count % 3==0 && count % 5 ==0){
            num_list.push("FizzBuzz");
        }else if (count % 3 ==0){
            num_list.push("Fizz");
        }else if(count % 5==0){
            num_list.push("Buzz");
        }else{
            num_list.push(count);
        }
        count++;
    }
    console.log(num_list);
}

//for(count=1, count<101, count++);
