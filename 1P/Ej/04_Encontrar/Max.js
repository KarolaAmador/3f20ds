//Complejidad = n

let s = [3, 1, 4, 2, 3], 
    max = s[0];

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