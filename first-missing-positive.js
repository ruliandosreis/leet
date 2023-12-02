/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    current = nums[i];
    /**
     * Swapping value to its correct position on the array
     */
    if (current > 0 && current <= nums.length && nums[current - 1] !== current) {
      // only ES6 and later
      [nums[current - 1], nums[i]] = [nums[i], nums[current - 1]];
      i--;
    }
  }

  console.log(nums);
  /**
   * Checking for the first missing positive number
   */
  for (let i = 1; i < nums.length + 1; i++) {
    if (nums[i - 1] !== i) {
      return i;
    }
  }

  /**
   * if all numbers are present, return the next number
   */
  return nums.length + 1;
};

const nums = [3, 4, -1, 1];

console.log(firstMissingPositive(nums));
