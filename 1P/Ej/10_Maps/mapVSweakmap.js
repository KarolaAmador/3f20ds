
//El objecto Map nos permite relacionar (mapear) unos valores 
//con otros como si fuera un diccionario, en formato clave/valor.
// por otra parte, un WeakMap solo acepta objetos como claves
//La referencia a las claves es débil, lo que significa que si no 
//hay otras referencias al objeto que actúa como clave, el garbage 
//collector podrá liberarlo.

//un WeakMap NO dispone del método .keys() para recuperar las claves, 
//NI de propiedades o métodos relacionados con más de un elemento a la vez, 
//como .values(), .entries(), .clear() o .size.
//Tampoco podemos iterar un WeakMap con el bucle for of.

//Maps

console.log('Map: \n');
map = new Map([['user1','Karola'], ['user2', 'Carlos'], ['user3', 'Claudia']]);

for(let [key, value] of map){
  console.log(key, value);
}

//"user1" "Karola"
//"user2" "Carlos"
//"user3" "Claudia"

//weakMaps
map.keys();
map.values();
map.entries();

let key = {userId:1};
let key2 = {userId:2};
let weakmap = new WeakMap();

weakmap.set(key,"Beto");
weakmap.has(key); //true
weakmap.get(key); //Beto

weakmap.set(key2,"Christina");
weakmap.size; //undefined

console.log(' \n WeakMap: \n \n', weakmap.get(key2));