let ln = 0, x = 0,
    n = prompt('Introduce el tamaño:');

for(let i = 1; i <= n; i++){
  x = Math.pow(-1,i+1)/i;
  ln = x;
  console.log(x);
}