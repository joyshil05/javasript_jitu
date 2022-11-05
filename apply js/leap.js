function isYear(year){
    
    const reminder = year%4;
    if(reminder == 0){
    return true;
    }
    else {
        return false;
    }
}
const check2000 = isYear(1700);
console.log(check2000);