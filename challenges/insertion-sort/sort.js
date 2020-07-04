`use strict`;

const testArr=[8,23,4,42,1,16,15];

function sortArr(arr){
  for (let j=0; j<arr.length; j++){
    let min = arr[j];
    for(let i=0+j; i<arr.length; i++){
      if (min > arr[i]){
        min = arr[i];
        arr[i]=arr[j];
        arr[j]=min;
      } 
    }
  }  

  return arr;
}

console.log(sortArr(testArr));

