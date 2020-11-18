function factorial(n){
    let f = 1;
    if(n == 0){
        return 1;
    }else{
        for(let i = 1; i<= n; i++){
            f = f * i;
        }
        return f;
    }
}

console.log(factorial(5));