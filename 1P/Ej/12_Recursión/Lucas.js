lucas=[1,3];
let x = 10;  

    sucLucas(2);
        console.log (lucas);

function sucLucas(n){ 
        if (n < x) { 
                lucas[n]=lucas[n-1]+lucas[n-2];
                sucLucas(n+1);
        }
    }