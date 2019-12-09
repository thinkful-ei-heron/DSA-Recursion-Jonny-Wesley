function countingSheep(count){
    if(count <= 0 ){
        return 'All sheep jumped over the fence';
    } else {
        console.log(countingSheep(count-1));
        return 'Another Sheep jumps over the fence';
    }
}
//console.log(countingSheep(10));

function powerCalculator(x,y) {
    if(y < 0) {
        return 'exponent should be >= 0';
    }
    if(y===0) {
        return 1;
    } else if(y === 1) {
        return x
    } else {
        return powerCalculator(x * x, y-1);
    }
}
//console.log(powerCalculator(10,3));
function reverseString(str, newStr=''){
    if(str.length === 0){
        return newStr;
    } else {
        return reverseString(str.substring(0,str.length-1), newStr + str.substring(str.length-1))
    }
}
//console.log(reverseString("Here"));

//--- n(n+1)/2
// 3 -6
function triangularNumber(n, i=n){
    if( i === 0 ) {
        return n;
    }
    return n+1 + triangularNumber(n, i-1)/2;
}

console.log(triangularNumber(3));


// add n to n N+1 number of times


// iterate over 
// for each multiply by N
// On final divide by 2
// find a base case
// 
