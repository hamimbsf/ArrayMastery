# 🚀 ArrayMastery

A curated collection of **advanced JavaScript array problems** with detailed solutions, clean syntax, and best practices. This repo is designed to help you:

- ✅ Master array manipulation techniques
- 🧠 Strengthen problem-solving skills
- 💼 Prepare for coding interviews with confidence

---

## 📂 File Structure

| File Name     | Description                                    |
| ------------- | ---------------------------------------------- |
| `practice.js` | Classic problems with clear step-by-step logic |
| `script.js`   | Advanced topics like rotations, merging, etc.  |

---

## 🧠 Problems Covered

| 🔢 Topic # | 📝 Problem / Algorithm Name             | ✅ Type / Technique              |
| ---------: | --------------------------------------- | -------------------------------- |
|          1 | Left Rotation by One                    | Basic array shift                |
|          2 | Right Rotation by One                   | Basic array shift                |
|          3 | Left Rotation by K (Brute-force)        | Loop-based shifting              |
|          4 | Left Rotation by K (Extra Array)        | Modulus indexing                 |
|          5 | Left Rotation by K (Reversal Algorithm) | Efficient block swap             |
|          6 | Nested Loop Example                     | Understanding nested iteration   |
|          7 | Remove Duplicates from Sorted Array     | Two-pointer technique            |
|          8 | Merge Two Sorted Arrays                 | Merge logic using three pointers |
|          9 | Maximum Subarray Sum                    | Kadane’s Algorithm               |
|         10 | Majority Element                        | Boyer-Moore Voting Algorithm     |

---

## 📌 Key Concepts Practiced

- ✅ Array traversal (`for`, `while`, `nested loops`)
- ✅ Index manipulation
- ✅ Rotations (left, right, by K)
- ✅ Pattern-based techniques (like two-pointer)
- ✅ Use of auxiliary arrays
- ✅ Mathematical logic (modulo, reversal)
- ✅ Efficient coding with minimal space

---

## 💡 Example Snippet

```js
// Reversal Algorithm for Left Rotation by K
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function reverse(i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

k = k % arr.length;
reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);

console.log(arr); // Output: [4, 5, 6, 7, 1, 2, 3]
```
