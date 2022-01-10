var n=5
function fact(n){
    if(n<=1){
        return n;
    }
    return n * fact(n-1);
}
console.log(fact(n));