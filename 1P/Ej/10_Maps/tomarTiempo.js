console.time('Tiempo de ejecución');
var nameMap = new Map(),
    name = "nombre",
    n = 10; //10e4 , 10e5, 10e6

while(nameMap.size < n){
    var numero = (Math.floor(Math.random() * (100 - 1) + 1)).toString();
    var nCompleto = name + numero;
    nameMap.set(numero, nCompleto);
    numero++;
}
for(let nombre of nameMap.values()){
    console.log(nombre);
}

console.timeEnd('Tiempo de ejecución');