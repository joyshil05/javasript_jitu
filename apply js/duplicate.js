var nam = [4,5,6,5,6,7,4,3,4,59,7,1,23,45,67];
var unique =[];
for(var i=0; i<nam.length; i++)
{
    var element=nam[i];
    var index = unique.indexOf(element);
    if(index==-1)
    {
        unique.push(element);
    }
}
console.log(unique);