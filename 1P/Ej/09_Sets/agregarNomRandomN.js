var nameSets = new Set(),
    name = "name",
    n = 5,
    nCompleto;

while(nameSets.size < n){
    let x = (Math.floor(Math.random() * (100 - 1) + 1)).toString();
    nCompleto = name + x;
    nameSets.add(nCompleto);
}
console.log(nameSets);