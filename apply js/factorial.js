function product(num){
        var product = 1;
    for(var i = 1; i<= num;i++)
    {
        product = product*i;
    }
    return product;
}
var result = product(6);
console.log(result)

