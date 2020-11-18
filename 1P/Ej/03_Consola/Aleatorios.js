let x = prompt('Ingresa la cantidad de números aleatorios'),
    n = prompt('Ingresa el valor máximo para los números aleatorios'),
    random = 0;

    for (let k = 1; k <= x; k++){
        random = Math.floor(Math.random() * n + 1);
        console.log(random);
}