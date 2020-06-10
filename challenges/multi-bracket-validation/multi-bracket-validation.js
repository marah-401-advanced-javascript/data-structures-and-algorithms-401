'use strict';

function multiBracketValidation(string) {
  let parentheses = '[]{}()';
  let myStack = [];
  let character;
  
  for(let i = 0; character = string[i] ; i++) {
    let braceIndex = parentheses.indexOf(character);

    if(braceIndex === -1) {
      continue;
    }
    else if (braceIndex % 2 === 0) {
      myStack.push(braceIndex + 1); 
    } 
    else {
      if(myStack.pop() !== braceIndex) {
        return false;
      }
    }
  }
  return myStack.length === 0;
}

let st1='{}()[]';
let st2='{()}';
let st3='{(})';

console.log(multiBracketValidation(st1));
console.log(multiBracketValidation(st2));
console.log(multiBracketValidation(st3));
