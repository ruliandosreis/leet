/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  quicksort(nums, 0, nums.length - 1);

  return nums;
};

var quicksort = function (nums, p, r) {
  let q;
  if (p < r) {
    q = partition(nums, p, r);
    quicksort(nums, p, q - 1);
    quicksort(nums, q + 1, r);
  }
};

var partition = function (nums, p, r) {
  let x = nums[r];
  let i = p - 1;
  let j = p;

  for (j; j < r; j++) {
    if (nums[j] <= x) {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  [nums[i + 1], nums[r]] = [nums[r], nums[i + 1]];
  return i + 1;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
