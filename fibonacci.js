// Iterative solution.

function fibs(n) {
  let prev = 0;
  let current = 1;
  let fibonacci;
  let array = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    fibonacci = current + prev;
    prev = current;
    current = fibonacci;
    array.push(fibonacci);
  }

  return array;
}

// Recursive solution.

function fibsRec(n, arr = [0, 1]) {
  if (n <= 2) return arr;

  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return fibsRec(n - 1, arr);
}

console.log(fibs(8));
console.log(fibsRec(8));
