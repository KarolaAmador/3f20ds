let a=2, b=1, c=0;

console.log(a);

for(let k=2; k<10; k++){
    c= a + b;
    a = b;
    b = c;
    console.log(b);
}