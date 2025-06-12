/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let max = Math.abs(nums[nums.length - 1] - nums[0]);

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(Math.abs(nums[i] - nums[i - 1]), max);
    }

    return max;
};
