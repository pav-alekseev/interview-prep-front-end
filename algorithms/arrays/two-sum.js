/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const diff = target - nums[i];

        if (diff in hash) {
            return [hash[diff], i]; 
        }

        hash[n] = i;
    }

    return [];
};
