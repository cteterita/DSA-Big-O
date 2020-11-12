/*
1. Counting Sheep

Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
*/

// RECURSIVE ALGORITHM - O(n)

function jumpSheepR(n) {
  if (n < 1) {
    console.log('All sheep jumped over the fence');
    return 0;
  }

  console.log(`${n}: Another sheep jumps over the fence`);
  jumpSheepR(n-1);
}

jumpSheepR(3);

// ITERATIVE ALGORITHM - O(n)

function jumpSheepI(n) {
  for(let i = 1; i <=n; i++) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
}
jumpSheepI(3);