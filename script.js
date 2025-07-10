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
