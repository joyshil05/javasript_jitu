function product(num){
        var product=1;
    var  i=1;
    while(i<=num){
        product = product*i;
        
        i++;
    }
    return product;
}
var result=product(5);
console.log(result)
