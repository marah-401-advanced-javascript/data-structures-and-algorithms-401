'use strict';

const testArr=[10,20,30,40,50];

function binarySearch(arr, searchKey){
  let returnedVal =0;
  for(let i = 0; i<arr.length; i++){
    if( arr[i]===searchKey){
      returnedVal = i;
      return returnedVal;
    }
  }
if (returnedVal===undefined || returnedVal===0){
  return -1;
}
    
}

console.log(binarySearch(testArr, 30));

module.exports = binarySearch;

