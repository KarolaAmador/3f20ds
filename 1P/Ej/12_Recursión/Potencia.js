let x = 7,
    y = 3;

function potencia(a, b){
    if (b == 0){
        return 1; 
    }
    else{
        return a * potencia(a, b-1);
    } 
        
} console.log(x + ' ^', y +' = ', potencia(x, y));