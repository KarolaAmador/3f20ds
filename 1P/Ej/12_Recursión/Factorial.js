let x = 10;

function factorial (n){
    if (n > 0 && n <= 1){
        return 1;
    } else {
        return n * factorial (n - 1);
    }
} console.log('Factorial n10:', factorial(x));