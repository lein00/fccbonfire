function largestOfFour(arr) {
  // You can do this!
  var first,second;
  var highest;
  var shit =[];
  for(first in arr){
    highest = 0;
    for(second in arr[first]){
      //console.log(arr[first][second]);
      if(arr[first][second] > highest){
        highest = arr[first][second];
      }
    }
    shit.push(highest);
    console.log(shit);
  }
  return shit;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
