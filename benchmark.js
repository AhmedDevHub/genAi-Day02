// Import sorting algorithms
const {
  quickSort,
  quickSortInPlace,
  quickSortIterative,
} = require("./quicksort");
const { mergeSort, heapSort } = require("./sort_comparison");

// Generate an array of random integers of given size
function randomArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * size));
}

// Benchmark a sorting function by timing how long it takes to sort a copy of the array
function benchmarkSort(name, fn, arr) {
  const input = arr.slice(); // Use a copy so each sort gets the same input
  console.time(name);
  fn(input);
  console.timeEnd(name);
}

// Set the size of the array to benchmark
const SIZE = 100000;
const arr = randomArray(SIZE);

// Print the benchmark header
console.log(`Benchmarking with array size: ${SIZE}`);

// Run benchmarks for each sorting algorithm
benchmarkSort("QuickSort (recursive)", (a) => quickSort(a), arr);
benchmarkSort("QuickSort (in-place)", (a) => quickSortInPlace(a), arr);
benchmarkSort("QuickSort (iterative)", (a) => quickSortIterative(a), arr);
benchmarkSort("MergeSort", (a) => mergeSort(a), arr);
benchmarkSort("HeapSort", (a) => heapSort(a), arr);
benchmarkSort("Built-in Array.sort", (a) => a.sort((x, y) => x - y), arr);
