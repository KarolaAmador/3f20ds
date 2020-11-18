let S = [3,1,4,2,3];
    function potencia(x) {
        return x.reduce((k, y) => 
            k.concat(k.map(d => [y].concat(d))), [[]]);
    }

console.log(potencia(S));
console.log("Es una Complejidad Exponencial");