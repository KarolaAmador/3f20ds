let n = 8; //números por imprimir

function impares(i, n){
    if (n > 0){
        console.log((2*i)-1);
        impares(i + 1, n - 1);
    }
} impares(1, n);
