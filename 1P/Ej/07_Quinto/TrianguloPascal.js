
    function trianguloPascal(n) {
        resultado=[[1], [1, 1]];
        for (let l=3; l<=n; l++) {
            resultado.push(
                [...Array(l)].map((el, i, a) =>
                    i==0 || i==a.length-1 ? 1 : resultado[l-2][i-1]+resultado[l-2][i]));
        }
        return resultado;
    } console.log(trianguloPascal(5));

/*(5) [Array(1), Array(2), Array(3), Array(4), Array(5)]
    0: [1]
    1: (2) [1, 1]
    2: (3) [1, 2, 1]
    3: (4) [1, 3, 3, 1]
    4: (5) [1, 4, 6, 4, 1]
*/