let i = 1, 
    p = 2, 
    j = 1,
    n = prompt('Cantidad de los primeros números primos por mostrar:');

while (i <= n){
    let m = Math.round(p / 2);
    while (m >= 2 && j == 1){
        if (p % m == 0){
            j = 0;    
        }
        m--;    
    }
    if(j == 1){
        console.log(p);
        i++;
    } 
    p += 1;
    j = 1;
}