/**
 * Given an array of positive integers representing the values of
 * coins in your possession, write a function that returns the minimum
 * amount of change (the minimum sum of money) that you CANNOT create.
 * The given coins can have any positive integer value and aren't necessarily
 * unique (i.e., you can have multiple coins of the same value).
 * 
 *   coins = [5, 7, 1, 1, 2, 3, 22]
 * 
 */

function nonConstrutableChange(coins = []) {
  let powerset = [[]];
  let count = 0;
  let hasChange = true;
  for (let i = 0; i < coins.length - 1; i++) {
    for (let j = 0, psLength = powerset.length; j < psLength; j++) {
      powerset.push(powerset[j].concat(coins[i]));
    }
  }

  const allPossibilities = [
    ...new Set(
      powerset
        .flatMap(subset => subset.reduce((prev, next) => prev + next, 0))
        .sort((a, b) => a - b),
    ),
  ];
  allPossibilities.push(coins.reduce((prev, next) => prev + next, 0));
  while (hasChange) {
    for (let item of allPossibilities) {
      if (item !== count) {
        hasChange = false;
        break;
      }
      count++;
    }
  }
  return count;
}

console.log(nonConstrutableChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));
console.log(nonConstrutableChange([1, 1, 1, 1, 1]));
console.log(nonConstrutableChange([5, 7, 1, 1, 2, 3, 22]));


/**
 * 2 - Sorted Squared Array
Write a function that takes in a non-empty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order.
*/

function sortedSquaredArray(arr = []) {
  if (!arr.length) {
    return [];
  }
  return arr.map(item => item ** 2).sort((a, b) => Math.abs(a) - Math.abs(b));
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([-2, -1]));
console.log(sortedSquaredArray([-10, -5, 0, 5, 10]));
