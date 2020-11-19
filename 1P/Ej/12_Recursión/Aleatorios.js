//Resuelto con arrays, no con series.

let x = [];

function aleatorio(){
   let n=Math.floor(Math.random()* 10 +1);
   if(x.length <10){
   x.push(n);
   aleatorio();
   }
}
aleatorio();
console.log(x);
