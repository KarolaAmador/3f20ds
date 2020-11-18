let x = Math.PI/2,
    sen = 0, sen2 = [],
    n = 10,
    f = 1;

    function factorial(){
            for ( k = 1; k < n; k++){
                f = f * k;
                return f;
            }
    }

    for(i = 0 ; i < n; i++){
        factorial()
            let sem = Math.pow(-1,i)*(Math.pow(x,2*i+1)/factorial(2*i+1));
            sen += sem;
            sen2[i] = sen;
            sen++;
    }

    console.log(sen2);