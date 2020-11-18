console.time('Tiempo de ejecución');

var nameSets = new Set(),
    name = "name",
    n = 10, //10e4 , 10e5, 10e6
    nCompleto;

while(nameSets.size < n){
    n = (Math.floor(Math.random() * (100 - 1) + 1)).toString();
    nCompleto = name + n;
    nameSets.add(nCompleto);
}
console.log(nameSets);
console.timeEnd('Tiempo de ejecución');