function twoSum(nums: number[], target: number): number[] {
  const numbers = nums;

  let firstRandomIndex = 0;
  let secondRandomIndex = 0;
  let sumOfTwoValues = 0;
  let isTarget = false;

  while (!isTarget) {
    firstRandomIndex = Math.round(Math.random() * (numbers.length - 1 - 0)) + 0;
    secondRandomIndex =
      Math.round(Math.random() * (numbers.length - 1 - 0)) + 0;

    if (firstRandomIndex === secondRandomIndex) {
      secondRandomIndex === 0 ? secondRandomIndex++ : secondRandomIndex--;
    }

    sumOfTwoValues = numbers[firstRandomIndex] + numbers[secondRandomIndex];

    if (sumOfTwoValues === target) {
      isTarget = true;
      return [firstRandomIndex, secondRandomIndex].sort((x, y) => +x - +y);
    }
  }

  return [];
}

const case1 =
  twoSum([2, 7, 11, 15], 9).toString() === [0, 1].toString()
    ? "Passed"
    : "Failed";
const case2 =
  twoSum([3, 2, 4], 6).toString() === [1, 2].toString() ? "Passed" : "Failed";
const case3 =
  twoSum([3, 3], 6).toString() === [0, 1].toString() ? "Passed" : "Failed";

console.log(`Case 1: ${twoSum([2, 7, 11, 15], 9)} (${case1})`);
console.log(`Case 2: ${twoSum([3, 2, 4], 6)} (${case2})`);
console.log(`Case 3: ${twoSum([3, 3], 6)} (${case3})`);
