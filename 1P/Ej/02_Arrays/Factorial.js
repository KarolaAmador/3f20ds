let n = 10,
    f = [1];

    for (let k = 1; k < n; k++){
        f[k] = f[k-1] * k;
}

console.log(f);