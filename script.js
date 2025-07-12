// Left rotation by one element
// let arr = [1, 2, 3, 4, 5];
//[2,3,4,5,1] you have to do this
// let copy = arr[0];

//way no 1

// let i = 0;
// while (i < arr.length - 1) {
//   arr[i] = arr[i + 1];
//   i++;
// }

//way no 2

// for (let index = 0; index < arr.length; index++) {
//   arr[index] = arr[index + 1];
// }

// arr[arr.length - 1] = copy;
// console.log(arr);

// right rotation by one step

// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1];
// let i = arr.length - 1;

// while (i > 0) {
//   arr[i] = arr[i - 1];
//   i--;
// }

// arr[0] = copy;

// console.log(arr);

// nested loop

// for (let j = 1; j <= 4; j++) {
//   console.log("Execution", j);
//   for (let index = 1; index <= 3; index++) {
//     console.log("Hello", index);
//   }
// }

//Left and right rotation by k element

// let arr = [1, 2, 3, 4, 5];

// let k = Number(prompt("Enter the value"));
// let k = 2;
// k = k % arr.length;

// for (let j = 0; j < k; j++) {
//   let copy = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log(arr);

// lets make another interesting solution

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter the value"));

// for (let index = 0; index < arr.length; index++) {
//   temp[index] = arr[(index + k) % arr.length];
// }
// console.log(temp);

// Reversal Algorithm

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = Number(prompt("Enter a number"));
// k = k % arr.length;
// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// reverse(0, arr.length - 1);
// console.log(arr);

// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// Remove Duplicates from Sorted Array

// let nums = [1, 1, 2, 2, 3, 3];

// var removeDuplicates = function (nums) {
//   let j = 1;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[j] = nums[i + 1];
//       j++;
//     }
//   }
//   return j;
// };

// let newLength = removeDuplicates(nums);

// console.log(newLength);

//merge sorted array

// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6, 8];

// let merge = new Array(arr1.length + arr2.length);
// let i = (j = k = 0);

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     merge[k++] = arr1[i++];
//   } else {
//     merge[k++] = arr2[j++];
//   }
// }

// while (i < arr1.length) {
//   merge[k++] = arr1[i++];
// }
// while (j < arr2.length) {
//   merge[k++] = arr2[j++];
// }

// console.log(merge);

//Maximum Subarray

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// var maxSubArray = function (nums) {
//   let max = -Infinity;
//   let sum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     max = Math.max(max, sum);
//     if (sum < 0) sum = 0;
//   }
//   return max;
// };

// let result = maxSubArray(nums);

// console.log(result);

//Majority Element

let nums = [1, 1, 2, 2, 3, 3, 3];
var majorityElement = function (nums) {
  let ans = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      ans = nums[i];
      count = 1;
    } else if (ans == nums[i]) count++;
    else count--;
  }
  return ans;
};
let result = majorityElement(nums);
console.log(result);
