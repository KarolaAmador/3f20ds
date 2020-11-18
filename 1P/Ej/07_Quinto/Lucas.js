let a = 2,
    b = 1,
    c = 0;

function lucas(n){
    if(n == 1){
        return a;
    }if(n == 2){
        return b;
    }else{
        for(let i = 1; i<= n-2; i++){
            c = a + b;
            a = b;
            b = c;
        }
    }return c;
}

console.log(lucas(5));