/*
5. String Splitter

Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.
*/

// RECURSIVE ALGORITHM - O(n)

function splitR(string, splitter) {
  const splitIndex = string.indexOf(splitter);
  if (splitIndex < 0) {
    return [string];
  }
  return [string.slice(0, splitIndex), ...splitR(string.slice(splitIndex+1),splitter)];
}

console.log(splitR('11/09//20', '/'));

// ITERATIVE ALGORITHM - O(n)

function splitI(string, splitter) {
  let returnArray = [];
  let nextChunk = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === splitter) {
      if (nextChunk.length > 0) {
        returnArray.push(nextChunk);
        nextChunk = '';
      }
    } else {
      nextChunk += string[i]
    }
  }
  if (nextChunk.length > 0) returnArray.push(nextChunk);
  return returnArray;
}

console.log(splitI('11/09/20', '/'));

