describe("QuickSort Algorithms", () => {
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

  test.each(cases)("quickSort - $name", ({ input, expected }) => {
    const arr = input.slice();
    const result = quickSort(arr);
    if (expected) {
      expect(result).toEqual(expected);
    } else {
      expect(result).toEqual([...arr].sort((a, b) => a - b));
    }
  });

  test.each(cases)("quickSortInPlace - $name", ({ input, expected }) => {
    const arr = input.slice();
    quickSortInPlace(arr);
    if (expected) {
      expect(arr).toEqual(expected);
    } else {
      expect(arr).toEqual([...arr].sort((a, b) => a - b));
    }
  });

  test.each(cases)("quickSortIterative - $name", ({ input, expected }) => {
    const arr = input.slice();
    quickSortIterative(arr);
    if (expected) {
      expect(arr).toEqual(expected);
    } else {
      expect(arr).toEqual([...arr].sort((a, b) => a - b));
    }
  });
});

// Unit tests for QuickSort algorithms
const {
  quickSort,
  quickSortInPlace,
  quickSortIterative,
} = require("./quicksort");

describe("QuickSort Algorithms", () => {
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

  // Test recursive QuickSort
  test.each(cases)("quickSort - $name", ({ input, expected }) => {
    const arr = input.slice();
    const result = quickSort(arr);
    if (expected) {
      expect(result).toEqual(expected);
    } else {
      expect(result).toEqual([...arr].sort((a, b) => a - b));
    }
  });

  // Test in-place QuickSort
  test.each(cases)("quickSortInPlace - $name", ({ input, expected }) => {
    const arr = input.slice();
    quickSortInPlace(arr);
    if (expected) {
      expect(arr).toEqual(expected);
    } else {
      expect(arr).toEqual([...arr].sort((a, b) => a - b));
    }
  });

  // Test iterative QuickSort
  test.each(cases)("quickSortIterative - $name", ({ input, expected }) => {
    const arr = input.slice();
    quickSortIterative(arr);
    if (expected) {
      expect(arr).toEqual(expected);
    } else {
      expect(arr).toEqual([...arr].sort((a, b) => a - b));
    }
  });
});
