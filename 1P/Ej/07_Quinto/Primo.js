let i,
    j = 2,
    k = 1,
    primo;

    function primos(n){
        do{ 
            let l = 0;
            for(let i = 1; i <= j; i++){
                if(j % i == 0){
                    l++;
                }
            }if(l <= 2){
                primo = j;
                k++;
            }j++
        }while(k<= n)
        return primo;
    }

    console.log(primos(5));