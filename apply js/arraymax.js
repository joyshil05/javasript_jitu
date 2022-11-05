var marks=[34,67,89,45,68,76,54];
var max = marks[0];
for(i = 0; i< marks.length; i++)
{
    var element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log("highest=",max);