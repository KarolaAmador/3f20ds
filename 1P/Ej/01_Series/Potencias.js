let x = 10,
    y = 3,
    potencia = 1;

for(let k = 1; k < x; k++){
    potencia = potencia * y;
    let m = (y + ' ^ ' + k + ' = ')
    console.log(m + potencia);
}