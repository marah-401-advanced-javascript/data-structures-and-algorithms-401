'use strict';

let finalArr = [0,0,0];

function sumMatrix(arr){
   for ( let i=0 ; i<arr.length ; i++){
     let sumVar = 0 ;
     for ( let j=0 ; j<arr[i].length ; j++){
       sumVar = sumVar + arr[i][j];
     }
      finalArr[i]= sumVar;
   }
  return finalArr;
}

const testArr=[ [1, null, 3], [3, 5, 7], [1, 7, 10] ]	;
sumMatrix(testArr);
