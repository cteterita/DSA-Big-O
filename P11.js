/*
11. Tower of Hanoi
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
*/

/*
Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
*/

// we count moves and track the rungs globally
let moves;
let rungs;

function printRungs() {
    console.log(`---${moves}---`);
    console.log(rungs[0]);
    console.log(rungs[1]);
    console.log(rungs[2]);
}

function hanoiTower(n) { // input is number of discs
    moves = 0;
    rungs = [
        [...Array(n+1).keys()].slice(1).reverse(),
        [],
        [],
    ];
    printRungs();

    solveTower(n, 0, 1, 2);

    // if either of the second two rungs has all n discs, the puzzle is solved!
    if (rungs[1].length === n || rungs[2].length === n) {
        console.log(`Solved in ${moves} moves!`);
        return moves;
    }
}

function solveTower(disc, startRung, stopRung, extraRung) {

    if (disc === 1) {
        // if it's the smallest disc, just put it at the destination
        moves++;
        rungs[stopRung].push(rungs[startRung].pop());
    } else {
        // solve the tower for all smaller discs, putting them on the extra rung
        solveTower(disc-1, startRung, extraRung, stopRung);
        // move this disc to the destination
        moves++;
        rungs[stopRung].push(rungs[startRung].pop());
        // solve the tower again for all smaller discs, taking them from the extra rung to the destination
        solveTower(disc-1, extraRung, stopRung, startRung);
    }

    printRungs();
}

hanoiTower(6);

/*
If you are given 5 disks, how do the rods look like after 7 recursive calls?

---7---
[ 5, 4 ]
[ 3, 2, 1 ]
[]
*/

/*
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

3: 7 moves
4: 15 moves
5: 31 moves
*/

/*
What is the runtime of your algorithm?

O(2^n) - each additional disc essentially doubles the number of moves
*/
