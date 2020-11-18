let x = Math.PI/2,
    sen = 0, 
    sem,
    n = 10,
    f = 1;

    function factorial(){
            for (let j=1; j<n; j++){
                f = f * j;
                return f;
            }
    }

    for(let k = 0 ; k < n; k++){
        factorial();
            sem = Math.pow(-1,k)*(Math.pow(x,2*k+1)/factorial(2*k+1));
            sen += sem;
            console.log(sem);
    }
