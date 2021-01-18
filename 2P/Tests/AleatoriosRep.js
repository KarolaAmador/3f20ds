/*

Amador Gallegos Karola Nadezhda 3°F

Input : array A of n integers
Output: Whether or not A contains an integer more than once

*/

var a = [29,49,2,30,4,5,5,29,2,33,5,2,10],
    r = {};

a.forEach(function(numero){
  r[numero] = (r[numero] || 0) + 1;
}); 

let i = 0;
while (r[i] != 1) {
    i++;
}

i>1? console.log('A contains an integer more than once')
:console.log('A does not contain an integer more than once');
console.log(r);/*

 **In console you can see the number of integers that 
 the array "a" has for each value (no se por que no se muestra aquí :/ )**

*/

//https://ideone.com/4qhXPO