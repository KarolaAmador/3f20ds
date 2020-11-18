let n = prompt('Ingresa el número a identificar factorial: '), 
    f = 1;

    for (let k = 1; k <= n; k++){
        f = f * k; 
        console.log(f);
} console.log('Factorial de número ingresado (' + n +'): ' + f);