// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//BRUTE FORCE
// var twoSum = function(nums, target) {
//   for(var addend1=0; addend1 < nums.length; addend1++) {
//     for(var addend2=addend1 + 1; addend2 < nums.length; addend2++) {
//       if(nums[addend1] + nums[addend2] === target) {
//         return [addend1, addend2]
//       }
//     }
//   }
// };

//o(n)
var twoSum = function(numbers, target) {
    var map = {},
        i,
        length = numbers.length,
        value,
        neededValue,
        result = [];
        
    for(i = 0; i < length; i++) {
        value = numbers[i];
        neededValue = target - value;
        if (neededValue in map) {
            result.push(map[neededValue]);
            result.push(i);
            break;
        } else {
            map[value] = i;
        }
    }
    return result;
};

/*
Some questions to ask:
1. In this example, the array is sorted. Is it sorted all the time?
2. What happens if the array is empty?
3. Is it possible that there are no solutions given the array and target?
*/
