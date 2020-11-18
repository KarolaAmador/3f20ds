let a=1, b=0,
    resultado = []
    resultado[0] = b
    resultado[1] = a;

for(let k = 2; k < 10; k++){
    resultado[k] = b + a;
    b = a;
    a = resultado[k];
}

console.log(resultado);