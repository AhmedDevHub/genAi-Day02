# Sorting Algorithms Comparison

This document compares QuickSort, MergeSort, HeapSort, and JavaScript's built-in Array.sort, focusing on how they work, their time and space complexity, and their key differences.

## QuickSort
- **How it works:** Picks a pivot, partitions the array into elements less than and greater than the pivot, and recursively sorts the subarrays.
- **Time Complexity:**
  - Best/Average: O(n log n)
  - Worst: O(n²) (rare, happens if the pivot is always the smallest/largest element)
- **Space Complexity:**
  - O(log n) for in-place version (due to recursion stack)
  - O(n) for non-in-place version (due to new arrays)
- **Notes:** Fast in practice, but not stable (equal elements may change order).

## MergeSort
- **How it works:** Recursively splits the array in half, sorts each half, and merges them back together.
- **Time Complexity:** O(n log n) in all cases
- **Space Complexity:** O(n) (needs extra space for merging)
- **Notes:** Stable sort (equal elements keep their order), good for linked lists.

## HeapSort
- **How it works:** Builds a max heap, repeatedly removes the largest element, and rebuilds the heap.
- **Time Complexity:** O(n log n) in all cases
- **Space Complexity:** O(1) (in-place)
- **Notes:** Not stable, but uses little extra memory.

## JavaScript's Array.sort
- **How it works:** Uses an optimized, engine-specific algorithm (often Timsort or QuickSort/V8's hybrid).
- **Time Complexity:** O(n log n) average (but can vary)
- **Space Complexity:** O(n) (depends on implementation)
- **Notes:** Stable in modern engines, very fast for most use cases.

## Summary Table
| Algorithm      | Best/Average | Worst    | Space   | Stable |
|---------------|--------------|----------|---------|--------|
| QuickSort     | O(n log n)   | O(n²)    | O(log n)/O(n) | No     |
| MergeSort     | O(n log n)   | O(n log n)| O(n)   | Yes    |
| HeapSort      | O(n log n)   | O(n log n)| O(1)   | No     |
| Array.sort    | O(n log n)   | Varies   | O(n)    | Yes    |

## Key Takeaways
- **QuickSort** is fast and efficient for most cases, but can degrade to O(n²) if not careful with pivot selection.
- **MergeSort** is always O(n log n) and stable, but uses more memory.
- **HeapSort** is in-place and O(n log n), but not stable.
- **Array.sort** is highly optimized and stable in modern JavaScript engines. 