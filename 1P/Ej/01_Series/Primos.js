function Primo(num) {
    for(var k = 2;k <= num-1; k++) {
        if(num%k==0) {
            return false;
        }
    } return true;
}
    for(var i = 1; i <= 24; i++) {
        if(Primo(i)) {
            console.log(i);
        }
}
