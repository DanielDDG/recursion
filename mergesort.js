// Merge sorting.

let arr = [9, 3, 7, 5, 6, 4, 5, 2];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArr.push(left[i]);
      i++;
    } else {
      sortedArr.push(right[j]);
      j++;
    }
  }

  return sortedArr.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(arr));
