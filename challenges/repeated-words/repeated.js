
function repeatedWord(str){
  var myArr = str.toLowerCase().split(' ');
  let repeated = [];
  for (let i=0 ; i<myArr.length ; i++){
    for(let j=i+1 ; j<myArr.length ; j++){
      if(myArr[i]=== myArr[j]){
        repeated[0]=myArr[i];
        j = myArr.length;
        i = myArr.length;
      }
    }
  }
  if(repeated[0]){
    return repeated[0];
  }else{
    return 'No repeated words';
  }
  
}

console.log(repeatedWord('Once upon a time, there was a brave princess who'));
module.exports = repeatedWord;