// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = function(nums, target) {
  const prevNums = {}
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]
    // check if the current number exists in the object
    const targetNum = target - curNum
    // if it exists, return the indices [prevNumIndex, curNumIndex]
    const targetNumIndex = prevNums[targetNum]

    if (targetNumIndex !== undefined) {
      return [targetNumIndex, i]
    } else {
      // if it doesn't exist, add the current number to the object
      prevNums[curNum] = i
    }
  }
}

const twoSum2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    // j=i+1 to avoid using the same element twice
    for (let j= i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return []
}

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]