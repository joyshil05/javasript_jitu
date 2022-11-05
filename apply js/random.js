function du(x,y) {
    if ((x < 0 && y> 0 ) || x > 0 && y < 0){
        return true;
    }
    else{
        return false;
    }
 }
 console.log(du(2,-3));
 console.log(du(9,10));
