
function getsum(num)
{
    var sum = 0;
for(i=0; i<num.length;i++)
{
    var element = num[i];
    sum = sum + element ;
}
return sum;
}
var num=[1,2,3,4,5,6,7];
var result = getsum(num)
console.log("sum of all number=",result);