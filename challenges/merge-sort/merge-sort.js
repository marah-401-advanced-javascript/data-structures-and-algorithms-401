`use strict`;

const testArr=[8,23,4,42,1,16,15];

function mergeSort(arr){
  let n = arr.length;
  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}
  
function merge (left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    }
    else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if (i === left.length) {
    //set remaining entries in arr to remaining values in right
    
  } else {
    //set remaining entries in arr to remaining values in left
    
  }
  return arr;
}

console.log(mergeSort(testArr));

