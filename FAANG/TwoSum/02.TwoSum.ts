function twoSum(nums: number[], target: number): number[] {
  const numberMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    const difference = target - number;

    if (numberMap.has(difference)) {
      return [numberMap.get(difference)!, i];
    }

    numberMap.set(number, i);
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
