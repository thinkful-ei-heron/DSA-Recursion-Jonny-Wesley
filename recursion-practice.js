function countingSheep(count) {
    if (count <= 0) {
        return 'All sheep jumped over the fence';
    } else {
        console.log(countingSheep(count - 1));
        return 'Another Sheep jumps over the fence';
    }
}

//console.log(countingSheep(10));

function powerCalculator(x, y) {
    if (y < 0) {
        return 'exponent should be >= 0';
    }
    if (y === 0) {
        return 1;
    } else if (y === 1) {
        return x;
    } else {
        return powerCalculator(x * x, y - 1);
    }
}

//console.log(powerCalculator(10,3));
function reverseString(str, newStr = '') {
    if (str.length === 0) {
        return newStr;
    } else {
        return reverseString(str.substring(0, str.length - 1), newStr + str.substring(str.length - 1))
    }
}

//console.log(reverseString("Here"));

function triangularNumber(n) {
    if (n === 1) {
        return n;
    } else if (n === 2) {
        return n + 1;
    } else {
        return n + triangularNumber(n - 1);
    }
}

//console.log(triangularNumber(4));

function stringSplitter(str, splitter, arr = []) {
    if (str.indexOf(splitter) === -1 || str.length <= 0) {
        arr.push(str);
        return arr;
    } else if (str.indexOf(splitter) !== -1) {
        arr.push(str.substring(0, str.indexOf(splitter)));
        return stringSplitter(str.substring(str.indexOf(splitter) + 1), splitter, arr);
    }
}

//console.log(stringSplitter('02/14/15','/'));

function fib(n) {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 1;
    }

    return fib(n - 2) + fib(n - 1);
}

//console.log(fib(7));

function factorial(n) {
    if (n <= 1) {
        return 1
    } else {
        return factorial(n - 1) * n
    }
}

//console.log(factorial(5))

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
function solveMaze(maze, loc = [0, 0], path = '', validPaths = []) {
    if (validPaths.length > 0) {
        return validPaths[0];
    }
    if (loc[1] !== maze[0].length - 1 && maze[loc[0]][loc[1] + 1] === 'e') {
        validPaths.push(path + 'R');
        return solveMaze(maze, loc, path + 'R', validPaths);
    } else if (loc[0] !== maze.length - 1 && maze[loc[0] + 1][loc[1]] === 'e') {
        validPaths.push(path + 'D');
        return solveMaze(maze, loc, path + 'D', validPaths);
    } else if (loc[1] !== 0 && maze[loc[0]][loc[1] - 1] === 'e') {
        validPaths.push(path + 'L');
        return solveMaze(maze, loc, path + 'L', validPaths);
    } else if (loc[0] !== 0 && maze[loc[0] - 1][loc[1]] === 'e') {
        validPaths.push(path + 'U');
        return solveMaze(maze, loc, path + 'U', validPaths);
    }

    if (validPaths.length === 0) {
        if (loc[1] !== maze[0].length - 1 && path.substring(path.length - 1) !== 'L' && maze[loc[0]][loc[1] + 1] === ' ') {
            loc[1] = loc[1] + 1;
            return solveMaze(maze, loc, path + 'R');
        } else if (path.substring(path.length - 1) !== 'R' && loc[1] !== 0 && maze[loc[0]][loc[1] - 1] === ' ') {
            loc[1] = loc[1] - 1;
            return solveMaze(maze, loc, path + 'L');
        }

        if (path.substring(path.length - 1) !== 'U' && loc[0] !== maze.length - 1 && maze[loc[0] + 1][loc[1]] === ' ') {
            loc[0] = loc[0] + 1;
            return solveMaze(maze, loc, path + 'D');
        } else if (path.substring(path.length - 1) !== 'D' && loc[0] !== 0 && maze[loc[0] - 1][loc[1]] === ' ') {
            loc[0] = loc[0] - 1;
            return solveMaze(maze, loc, path + 'U');
        }
    } else {
        for (let newPath of validPaths) {
            if (newPath.charAt(path.length) !== path.substring(path.length - 1)) {
                if (loc[1] !== maze[0].length - 1 && path.substring(path.length - 1) !== 'L' && maze[loc[0]][loc[1] + 1] === ' ') {
                    loc[1] = loc[1] + 1;
                    return solveMaze(maze, loc, path + 'R');
                } else if (path.substring(path.length - 1) !== 'R' && loc[1] !== 0 && maze[loc[0]][loc[1] - 1] === ' ') {
                    loc[1] = loc[1] - 1;
                    return solveMaze(maze, loc, path + 'L');
                }
                if (path.substring(path.length - 1) !== 'U' && loc[0] !== maze.length - 1 && maze[loc[0] + 1][loc[1]] === ' ') {
                    loc[0] = loc[0] + 1;
                    return solveMaze(maze, loc, path + 'D');
                } else if (path.substring(path.length - 1) !== 'D' && loc[0] !== 0 && maze[loc[0] - 1][loc[1]] === ' ') {
                    loc[0] = loc[0] - 1;
                    return solveMaze(maze, loc, path + 'U');
                }
            } else {
                if (path.substring(path.length - 1) !== 'R' && loc[1] !== 0 && maze[loc[0]][loc[1] - 1] === ' ') {
                    loc[1] = loc[1] - 1;
                    return solveMaze(maze, loc, path + 'L');
                } else if (loc[1] !== maze[0].length - 1 && path.substring(path.length - 1) !== 'L' && maze[loc[0]][loc[1] + 1] === ' ') {
                    loc[1] = loc[1] + 1;
                    return solveMaze(maze, loc, path + 'R');
                }
                if (path.substring(path.length - 1) !== 'U' && loc[0] !== maze.length - 1 && maze[loc[0] + 1][loc[1]] === ' ') {
                    loc[0] = loc[0] + 1;
                    return solveMaze(maze, loc, path + 'D');
                } else if (path.substring(path.length - 1) !== 'D' && loc[0] !== 0 && maze[loc[0] - 1][loc[1]] === ' ') {
                    loc[0] = loc[0] - 1;
                    return solveMaze(maze, loc, path + 'U');
                }
            }
        }
    }
}

function solveAllMazes(maze, x=0,y=0, path = '', validPaths = []) {
    if (validPaths.length > 3) {
        return validPaths;
    }

    //Solutions
    if (y !== maze[0].length - 1 && maze[x][y + 1] === 'e') {
        validPaths.push(path + 'R');
        return validPaths;
    } else if (x !== maze.length - 1 && maze[x + 1][y] === 'e') {
        validPaths.push(path + 'D');
        return validPaths;
    } else if (y !== 0 && maze[x][y - 1] === 'e') {
        validPaths.push(path + 'L');
        return validPaths;
    } else if (x !== 0 && maze[x - 1][y] === 'e') {
        validPaths.push(path + 'U');
        return validPaths;
    }


    if (y !== maze[0].length - 1 && path.substring(path.length - 1) !== 'L' && maze[x][y + 1] === ' ') {
        solveAllMazes(maze, x, y+1, path +'R', validPaths);
    }
    if (path.substring(path.length - 1) !== 'R' && y !== 0 && maze[x][y - 1] === ' ') {
        solveAllMazes(maze, x,y-1, path + 'L', validPaths);
    }
    if (path.substring(path.length - 1) !== 'U' && x !== maze.length - 1 && maze[x + 1][y] === ' ') {
        solveAllMazes(maze, x+1,y, path+'D', validPaths);
    }
    if (path.substring(path.length - 1) !== 'D' && x !== 0 && maze[x - 1][y] === ' ') {
        solveAllMazes(maze, x-1,y, path+'U', validPaths);
    }
}


//console.log(solveMaze(maze));

function anagrams(str){
    const output = [];
    function traverse(string, perm = ''){
        const seen = new Set();
        if (!string) {
            output.push(perm);
        }
        for (let i = 0; i < string.length; i++){
            if (!seen.has(string[i])){
                seen.add(string[i]);
                traverse(string.slice(0,i) + string.slice(i+1), perm + string[i]);
            }
        }
    }
    traverse(str);
    return output;
}
//console.log(anagrams('east'));
function binaryRep(n) {
    if (n < 0) {
        return '';
    }
    let binary = n % 2;
    return binaryRep(Math.floor(n / 2)) + binary;
}

const org = [
    {id: 'Zuckerberg', boss: null},
    {id: 'Schroepfer', boss: 'Zuckerberg'},
    {id: 'Schrage', boss: 'Zuckerberg'},
    {id: 'Sandberg', boss: 'Zuckerberg'},
    {id: 'Bosworth', boss: 'Schroepfer'},
    {id: 'Steve', boss: 'Bosworth'},
    {id: 'Kyle', boss: 'Bosworth'},
    {id: 'VanDyck', boss: 'Schrage'},
];
function orgChart(obj, boss) {
    let node = {};
    obj
    .filter(c => c.boss == boss)
    .forEach(c => node[c.id] = orgChart(obj, c.id));
    return node;
}
console.log(
    JSON.stringify(orgChart(org, null), null, 2)
);