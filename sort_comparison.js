// MergeSort: Recursively splits and merges to sort an array
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// Helper for merging two sorted arrays
function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// HeapSort: In-place heap-based sorting
function heapSort(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

// Helper for maintaining the heap property
function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// Compare all sorting algorithms on the same input
const {
  quickSort,
  quickSortInPlace,
  quickSortIterative,
} = require("./quicksort");
function compareSorts(arr) {
  const arr1 = arr.slice();
  const arr2 = arr.slice();
  const arr3 = arr.slice();
  const arr4 = arr.slice();
  return {
    quickSort: quickSort(arr1),
    quickSortInPlace: (quickSortInPlace(arr2), arr2),
    quickSortIterative: (quickSortIterative(arr3), arr3),
    mergeSort: mergeSort(arr4),
    heapSort: heapSort(arr.slice()),
    builtInSort: arr.slice().sort((a, b) => a - b),
  };
}

module.exports = { mergeSort, heapSort, compareSorts };
