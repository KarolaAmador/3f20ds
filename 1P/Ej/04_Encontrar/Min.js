//Complejidad = n

let s = [3, 1, 4, 2, 3], 
    min = s[0];

function Minimo(){
    for(let i = 0; i < s.length; i++){
        if(min > s[i]){
            min = s[i];
        }else{
          continue;
        }
    }return min;
} 

console.log('Valor mínimo', Minimo());

function Maximo(){
    for(let i = 0; i < s.length; i++){
        if(max < s[i]){
            max = s[i];
        }else{
          continue;
        } 
    }return max;
} 

console.log('Valor máximo: ', Maximo());
console.log('Complejidad = n');