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
        return x;
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

function triangularNumber(n){
    if( n === 1 ) {
        return n;
    } else if ( n === 2) {
        return n+1;
    } else {
        return n + triangularNumber(n-1);
    }
}

//console.log(triangularNumber(4));

function stringSplitter(str, splitter, arr=[]) {
    if (str.indexOf(splitter) === -1 || str.length <= 0) {
        arr.push(str);
        return arr;
    } else if(str.indexOf(splitter) !== -1) {
        arr.push(str.substring(0, str.indexOf(splitter)));
        return stringSplitter(str.substring(str.indexOf(splitter)+1), splitter, arr);
    }
}
//console.log(stringSplitter('02/14/15','/'));
