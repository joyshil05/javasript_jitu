function product(n){
    if(n == 0){
        return 1;
    }
    else {
        return n* product(n-1);
    }
}
var result = product(5);
console.log(result)