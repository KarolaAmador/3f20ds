let x = 0, 
    y = [];

 //   while(x < 10){
        for (let k = 1;k < 20; k++) { 
            if(k % 2 != 0) {
                y[x] = k;
                x++;
            }
        } 
//    } 
        console.log(y);