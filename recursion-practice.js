function countingSheep(count){
    if(count <= 0 ){
        return 'All sheep jumped over the fence';
    } else {
        console.log(countingSheep(count-1));
        return 'Another Sheep jumps over the fence';
    }
}
console.log(countingSheep(10));

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
console.log(powerCalculator(10,3));