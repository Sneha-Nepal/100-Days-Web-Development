function fibonacciSeries(n){
    num_array = [0, 1];
    if (n==1){
        console.log([num_array[0]]);
    }else if(n==2){
        console.log([num_array[0], num_array[1]]);  
    }else{
        for(var i=2; i < n ; i++){
            add_num = num_array[i-1] + num_array[i-2];
            num_array.push(add_num);
        }
    console.log(num_array);
    }
}
