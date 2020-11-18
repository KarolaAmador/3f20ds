var nameMap = new Map(),
    name = "nombre",
    n = 1;

while(nameMap.size<10){
    var nCompleto = (name + n).toString();
    nameMap.set(n, nCompleto);
    n++;
}
for(let name1 of nameMap.values()){
    console.log(name1);
}