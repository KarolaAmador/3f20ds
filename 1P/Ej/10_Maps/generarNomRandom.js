var name = "nombre",
    i = 0,
    n,
    nCompleto;

while(i<10){
    n = (Math.floor(Math.random() * (100 - 1) + 1)).toString();
    nCompleto = name + n;
    console.log(nCompleto);
    i++;
}