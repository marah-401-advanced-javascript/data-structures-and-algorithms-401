'use strict';
function insertShiftArray(arr, val){
  let myIndex = Math.ceil(arr.length /2) ;
  arr.splice(myIndex, 0, val );
  return arr ;
}
    
let testArr=[10,20,30,40,50];
console.log('before shifting',testArr);
console.log('after shifting',insertShiftArray(testArr,1));

module.exports = insertShiftArray;
