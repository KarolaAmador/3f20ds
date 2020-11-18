let a=2, b=1, c=0, resultado = [];

resultado[0] = a;
resultado[1] = b;

for(let k = 2; k < 10; k++){
    resultado[k] = a + b;
    a = b;
    b = resultado[k];
}

console.log(resultado);