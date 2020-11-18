
var nameSet = new Set(),
    name = "nombre";

while(nameSet.size<10){
    var n = (Math.floor(Math.random() * (100 - 1) + 1)).toString();
    var nCompleto = name + n;
    nameSet.add(nCompleto);
}

console.log(nameSet);