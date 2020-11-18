var name = "Nombre",
    i = 0;

while(i<10){
    var n = (Math.floor(Math.random() * (100 - 1) + 1)).toString();
    var nCompleto = name + n;
    console.log(nCompleto);
    i++;
}