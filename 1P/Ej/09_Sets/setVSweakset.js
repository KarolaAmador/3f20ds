

/*
Los sets son conjuntos de elementos no repetidos, 
que pueden ser tanto objetos, como valores primitivos.
Tiene métodos equivalentes a un Map, con la diferencia 
que utilizamos add para añadir elementos, y de que en 
un set las keys y los values son lo mismo, el valor 
del objeto. Del mismo modo, .entries() devuelve una pareja [value, value], 
por el contrario, los WeakSets únicamente pueden contener colecciones de objetos.
La referencia a los objetos es débil, por lo que si no hay 
otra referencia a uno de los objetos contenidos en el WeakSet, 
el garbage collector lo podrá liberar. Esto implica que:
No hay una lista de objetos almacenados en la colección
Los WeakSet no son enumerables.
Métodos de los que dispone:
-add()
-delete()
-has()
*/

let set1 = new Set(['foo', 'bar']);
for(let i of set1){
  console.log('set1:', i);
}
//set1: foo
//set1: bar

//set elements are unique
let set2 = new Set().add('foo').add('bar').add('bar');
for(let i of set2){
  console.log('set2:', i);
}
//set2: foo
//set2: bar

set1.has('foo');  //true
set1.delete('foo');  //true
set1.has('foo');  //false
set1.size;  //1
set1.clear();
set1.size;  //0

//WeakSets-------------

let obj = ['foo', 'bar'];
let ws = new WeakSet();
ws.add(obj);

ws.has(obj); //true

obj = undefined;
ws.has(obj); //false
ws.delete(obj); //false