describe("Other Sorting Algorithms", () => {
  const cases = [
    { name: "empty array", input: [], expected: [] },
    { name: "single element", input: [1], expected: [1] },
    {
      name: "already sorted",
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      name: "reverse sorted",
      input: [5, 4, 3, 2, 1],
      expected: [1, 2, 3, 4, 5],
    },
    {
      name: "with duplicates",
      input: [3, 1, 2, 3, 1],
      expected: [1, 1, 2, 3, 3],
    },
    {
      name: "large dataset",
      input: Array.from({ length: 1000 }, () =>
        Math.floor(Math.random() * 1000)
      ),
      expected: null,
    },
  ];

  test.each(cases)("mergeSort - $name", ({ input, expected }) => {
    const arr = input.slice();
    const result = mergeSort(arr);
    if (expected) {
      expect(result).toEqual(expected);
    } else {
      expect(result).toEqual([...arr].sort((a, b) => a - b));
    }
  });

  test.each(cases)("heapSort - $name", ({ input, expected }) => {
    const arr = input.slice();
    const result = heapSort(arr);
    if (expected) {
      expect(result).toEqual(expected);
    } else {
      expect(result).toEqual([...arr].sort((a, b) => a - b));
    }
  });

  test.each(cases)("compareSorts - $name", ({ input, expected }) => {
    const arr = input.slice();
    const results = compareSorts(arr);
    const sorted = expected || [...arr].sort((a, b) => a - b);
    expect(results.quickSort).toEqual(sorted);
    expect(results.quickSortInPlace).toEqual(sorted);
    expect(results.quickSortIterative).toEqual(sorted);
    expect(results.mergeSort).toEqual(sorted);
    expect(results.heapSort).toEqual(sorted);
    expect(results.builtInSort).toEqual(sorted);
  });
});

// Unit tests for MergeSort, HeapSort, and comparison function
const { mergeSort, heapSort, compareSorts } = require("./sort_comparison");

describe("Other Sorting Algorithms", () => {
  // Test cases for various scenarios
  const cases = [
    { name: "empty array", input: [], expected: [] },
    { name: "single element", input: [1], expected: [1] },
    {
      name: "already sorted",
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      name: "reverse sorted",
      input: [5, 4, 3, 2, 1],
      expected: [1, 2, 3, 4, 5],
    },
    {
      name: "with duplicates",
      input: [3, 1, 2, 3, 1],
      expected: [1, 1, 2, 3, 3],
    },
    {
      name: "large dataset",
      input: Array.from({ length: 1000 }, () =>
        Math.floor(Math.random() * 1000)
      ),
      expected: null,
    },
  ];

  // Test MergeSort
  test.each(cases)("mergeSort - $name", ({ input, expected }) => {
    const arr = input.slice();
    const result = mergeSort(arr);
    if (expected) {
      expect(result).toEqual(expected);
    } else {
      expect(result).toEqual([...arr].sort((a, b) => a - b));
    }
  });

  // Test HeapSort
  test.each(cases)("heapSort - $name", ({ input, expected }) => {
    const arr = input.slice();
    const result = heapSort(arr);
    if (expected) {
      expect(result).toEqual(expected);
    } else {
      expect(result).toEqual([...arr].sort((a, b) => a - b));
    }
  });

  // Test compareSorts (all algorithms)
  test.each(cases)("compareSorts - $name", ({ input, expected }) => {
    const arr = input.slice();
    const results = compareSorts(arr);
    const sorted = expected || [...arr].sort((a, b) => a - b);
    expect(results.quickSort).toEqual(sorted);
    expect(results.quickSortInPlace).toEqual(sorted);
    expect(results.quickSortIterative).toEqual(sorted);
    expect(results.mergeSort).toEqual(sorted);
    expect(results.heapSort).toEqual(sorted);
    expect(results.builtInSort).toEqual(sorted);
  });
});
