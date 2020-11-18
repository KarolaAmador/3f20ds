//Complejidad = n

let s = [3, 1, 4, 2, 3], 
    suma = 0;

function Promedio(){
    for(i = 0; i < s.length; i++){
        suma += s[i];
    }
    return suma/s.length;
} 

console.log('Promedio: ', Promedio());
console.log('Complejidad = n');