'use strict';

function reverseArray(array){
    let newArr=[];
    for(let i=0 ; i<array.length ; i++){
        let var1 = array[array.length-i-1];
        newArr[i] = var1;
    }
    return newArr;
};

let testArr=[0,1,2,3,4,5];

console.log('The original array: ',testArr);
console.log('The reversed array: ',reverseArray(testArr));