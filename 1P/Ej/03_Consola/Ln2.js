let ln = 0, 
    l = 0,
    x = prompt('Introduce x:'),
    n = prompt('Introduce el número de iteraciones:')

for( i = 1; i <= n; i++){
  l = (Math.pow(x, i)*Math.pow(-1,i+1))/i;
  ln = l;
  console.log(ln);
}