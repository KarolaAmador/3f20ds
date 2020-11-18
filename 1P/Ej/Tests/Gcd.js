var sTime = new Date().getMilliseconds();
 
function gcd(a, b) {
    let u = a;
    let v = b;
    let r = 0;
    let j = 0;
    let i = 0;
    while (u > 0) {
        if (u < v) {
            r = u;
            u = v;
            v = r;
            i++;
        }
        u -= v;
        j++;
    }
    console.log('Took', i+j, 'steps to run the program.');
    return v;
}
 
//verify output is correct
 
//console.log('GDC:',gcd(22, 32));
//var eTime = new Date().getMilliseconds();
//console.log('Took', eTime-sTime, 'ms to run the program');
 
//then try
 
//console.log('GDC:',gcd(3, 2));
//var eTime = new Date().getMilliseconds();
//console.log('Took', eTime-sTime, 'ms to run the program.');
 
console.log('GDC:',gcd(1000000005, 999999999));
var eTime = new Date().getMilliseconds();
console.log('Took', eTime-sTime, 'ms to run the program.');
 
//can we do better ? (yes/no)
// yes
