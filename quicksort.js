// Recursive QuickSort (returns a new sorted array)
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// In-place QuickSort (modifies the input array)
function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSortInPlace(arr, left, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, right);
  }
  return arr;
}

// Partition helper for in-place QuickSort
function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

// Iterative QuickSort (in-place, uses a stack instead of recursion)
function quickSortIterative(arr) {
  const stack = [];
  stack.push(0);
  stack.push(arr.length - 1);
  while (stack.length) {
    const right = stack.pop();
    const left = stack.pop();
    if (left < right) {
      const pivotIndex = partition(arr, left, right);
      stack.push(left);
      stack.push(pivotIndex - 1);
      stack.push(pivotIndex + 1);
      stack.push(right);
    }
  }
  return arr;
}

module.exports = { quickSort, quickSortInPlace, quickSortIterative };
