function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    }
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top-1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}

function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
        var converted = "";
    while (s.length() > 0) {
        converted += s.pop();   
    }
return converted;
}

var num = 73;
var base = 9;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
num = 182;
base = 4;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);