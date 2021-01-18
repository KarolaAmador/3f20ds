class Cola{
    constructor() {
        this.fin=[];
    }
    add(element){
        this.fin.push(element)
        return this.fin;
    }
    quitar(){
        return this.fin.shift();
    }
    primero() {
        return this.fin[0];
    }
    mostrar(){
        return this.fin;
    }
    vacio(){
        if (this.fin.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function dance(hom, muj) {
    console.log("-------Parejas de baile:-------");
    var counter = 1;
    while (!muj.vacio() && !hom.vacio()) {
     
        

        person = muj.quitar();
        person2 = hom.quitar();
        console.log("Pareja número "+counter+ ' --> '+ person.name+ ' y ' +person2.name);
        counter++
       
    }
    console.log();
}
let M = new Cola();
let F = new Cola();

M.add(new Dancer("Isaac", "M"))
M.add(new Dancer("Carlos", "M"))
M.add(new Dancer("Francisco", "M"))
M.add(new Dancer("Cristian", "M"))
M.add(new Dancer("Oscar", "M"))

F.add(new Dancer("Claudia","F"))
F.add(new Dancer("Betania","F"))
F.add(new Dancer("Yovanha","F"))
F.add(new Dancer("Valentina","F"))

dance(M,F)
if (!F.vacio()) {
    console.log('--------------------------------');
    console.log(F.primero().name + " esta en espera.");
}
if (!M.vacio()) {
    console.log('--------------------------------');
    console.log(M.primero().name + " está en espera.");
}