let x = 10,
    y = 3,
    potencia = [];

for(let k = 1; k < x; k++){
    potencia[k] = Math.pow(y, k);
    let m = (y + ' ^ ' + k + ' = ');
    console.log(m + potencia[k]);
}     