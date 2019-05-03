'use strict'
const insertionSort = (array)=>{
  let length = array.length;
  let i = 1;
  let j;
  for (i;i<length;i++){
    j = i-1;
    let current = array[i];
    if(current===undefined){
      current = array[i+1]
      array.splice(i,1)
    }
    console.log(i,array.length)
    while(j>=0&&array[j]>current){
      console.log(array,'before')
      array.splice(j+1,1)
      array.splice(j,0,current)
      console.log(array,'after')
      j--;
    }
  }
  return array
}


let array = [10,30,16,,7,7,5,4,8]
console.log(array)
console.log(insertionSort(array))