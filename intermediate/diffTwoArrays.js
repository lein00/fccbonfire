function diff(arr1, arr2) {
  var newArr = [];


function getDiff(firstArr, secondArr){
 for(var elem in secondArr){
    if(firstArr.indexOf(secondArr[elem]) === -1){
      newArr.push(secondArr[elem]);
    }
  } 
}

  getDiff(arr1, arr2);
  getDiff(arr2, arr1);

  return newArr;
}


diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
