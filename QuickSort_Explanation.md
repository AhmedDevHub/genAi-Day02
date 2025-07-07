# QuickSort Algorithm Explanation (JavaScript)

This document explains how the `quickSort` function in `quicksort.js` works, step by step, for beginners.

## What is QuickSort?
QuickSort is a popular sorting algorithm that uses a divide-and-conquer approach to sort elements in an array. It is efficient and commonly used in practice.

## How Does the Provided Implementation Work?

### 1. **Base Case**
If the array has 0 or 1 element, it is already sorted. The function returns the array as is:
```js
if (arr.length <= 1) {
    return arr;
}
```

### 2. **Choosing a Pivot**
A pivot is chosen to divide the array. Here, the last element is used as the pivot:
```js
const pivot = arr[arr.length - 1];
```

### 3. **Partitioning**
The array is split into two new arrays:
- `left`: elements less than the pivot
- `right`: elements greater than or equal to the pivot

This is done using a loop:
```js
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
        left.push(arr[i]);
    } else {
        right.push(arr[i]);
    }
}
```

### 4. **Recursion**
The function calls itself to sort the `left` and `right` arrays:
```js
return [...quickSort(left), pivot, ...quickSort(right)];
```
This combines the sorted left part, the pivot, and the sorted right part into a new sorted array.

## Example
```js
const unsorted = [3, 6, 1, 5, 2, 4];
const sorted = quickSort(unsorted);
console.log(sorted); // [1, 2, 3, 4, 5, 6]
```

## Key Points
- **Recursive**: The function calls itself to sort smaller parts of the array.
- **Not in-place**: This version creates new arrays for `left` and `right` at each step.
- **Beginner-friendly**: Easy to read and understand, but not the most memory-efficient.

## Next Steps
- Optimize the algorithm (e.g., in-place sorting, iterative version).
- Compare with other sorting algorithms.
- Add unit tests and a web interface.

## In-Place QuickSort
This version sorts the array by modifying it directly, using two pointers and a helper function called `partition`.

### How It Works
- The function takes the array and two indices (`left` and `right`) to define the current subarray.
- It uses the `partition` function to place the pivot in its correct position and rearrange elements.
- It then recursively sorts the subarrays to the left and right of the pivot.
- This version is more memory-efficient because it does not create new arrays at each step.

### Example
```js
let arr = [3, 6, 1, 5, 2, 4];
quickSortInPlace(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6]
```

## Iterative QuickSort
This version avoids recursion by using a stack to keep track of subarrays that need to be sorted.

### How It Works
- The function uses a stack to store the indices of subarrays.
- It repeatedly pops indices from the stack, partitions the subarray, and pushes new subarrays onto the stack.
- This approach can help avoid stack overflow errors for very large arrays.

### Example
```js
let arr2 = [9, 7, 5, 11, 12, 2];
quickSortIterative(arr2);
console.log(arr2); // [2, 5, 7, 9, 11, 12]
```

## Key Differences
- **Original version**: Not in-place, uses recursion, easy to read.
- **In-place version**: Modifies the array directly, more memory-efficient.
- **Iterative version**: Uses a stack instead of recursion, avoids call stack limits. 