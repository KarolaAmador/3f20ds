let a = 1,
    b = 0,
    c = 0;

    function fibonacci(n){
        if(n == 1){
            return b;
        }if(n == 2){
            return a;
        }else{
            for(let i = 0; i <= n-2; i++){
                c = a + b;
                a = b;
                b = c;
            }
        }return c;
    }

    console.log(fibonacci(5));