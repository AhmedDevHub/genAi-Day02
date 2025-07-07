# Sorting Algorithms Project

This project demonstrates and compares several sorting algorithms (QuickSort, MergeSort, HeapSort, and JavaScript's built-in sort) in JavaScript. It includes:

- Multiple QuickSort implementations
- Unit tests
- Benchmarking
- A simple web interface

## Prerequisites

- [Node.js](https://nodejs.org/) (includes npm)

## Setup

1. **Install dependencies (for testing only):**
   ```sh
   npm install --save-dev jest
   ```
   This will create a `node_modules` folder and install Jest for running tests.

## How to Run

### 1. Run Benchmarks

Benchmark all sorting algorithms and see their performance:

```sh
node benchmark.js
```

### 2. Run Unit Tests

Run all tests (requires Jest):

```sh
npx jest
```

### 3. Use the Web Interface

Open `index.html` in your web browser. Enter numbers, select a sorting algorithm, and click "Sort" to see the result.

## Project Structure

- `quicksort.js` — Sorting algorithm implementations (exported for Node.js)
- `sort_comparison.js` — MergeSort, HeapSort, and comparison utilities
- `benchmark.js` — Performance benchmarking script
- `quicksort.test.js`, `sort_comparison.test.js` — Unit tests (Jest)
- `index.html` — Web interface for user interaction
- `jest.config.js` — Jest configuration

## Notes

- You do **not** need `node_modules` to use the web interface or run `benchmark.js`.
- You **do** need `node_modules` (via `npm install`) to run tests with Jest.

---

If you have any issues, make sure Node.js is installed and you are in the correct project directory.
