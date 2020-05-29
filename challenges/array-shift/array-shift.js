'use strict';

function insertShiftArray(arr, val){
  let myIndex = Math.ceil(arr.length /2) ;
  let myArr=[];

  for (let i=0 ; i<arr.length+1 ;i++){
    if (i === myIndex){
      myArr[i]=val;
    }
    else if(i > myIndex){
      myArr[i]=arr[i-1];
    }
    else{
      myArr[i]=arr[i];
    }
  }
  return myArr ;
}
    
    
let testArr1=[10,20,30,40,50];
let testArr2=[10,20,30,40,50,60];
console.log('ODD array:');
console.log('before shifting',testArr1);
console.log('after shifting',insertShiftArray(testArr1,1));
console.log('EVEN array:');
console.log('before shifting',testArr2);
console.log('after shifting',insertShiftArray(testArr2,1));

module.exports = insertShiftArray;
