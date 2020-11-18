let x = prompt('Ingresa el número base'),
    k = prompt('Ingresa el exponente'), 
    r;

    for (let i = 1; i <= k; i++){
        r = Math.pow(x,k);
        console.log(r);
    } 