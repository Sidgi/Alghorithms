const bubbleSort = (array)=>{
  let swapped = true;
  while(swapped){
    swapped = false;
    for(let i=0;i<array.length;i++){
      if(array[i]===undefined){
        array.splice(i,1);
        continue;
      }
      if(array[i]>array[i+1]){
        let elI = array[i];
        let elJ = array[i+1];
        array[i] = elJ;
        array[i+1] = elI;
        swapped = true;
      }
     }
    }
    return array
  }

let array = [10,3,16,7,,7,5,4,8]
console.log(bubbleSort(array))
