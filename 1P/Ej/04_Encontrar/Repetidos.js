//Complejidad = n^2

let s = [3, 1, 4, 2, 3], 
    r = [],
    repetidos = {};

s.forEach(function(numero){
  repetidos[numero] = (repetidos[numero] || 0) + 1;
});

console.log('Cantidad de repetidos por cada número:', repetidos);
console.log('Complejidad = n^2');