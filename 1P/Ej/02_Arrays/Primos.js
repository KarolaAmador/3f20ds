let x = 30,
    numerosPrimos = [];

for (k = 2; k < x; k++) {
  if (primo(k)) {
    numerosPrimos.push(k);
  } 
}

function primo(numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}

console.log(numerosPrimos);