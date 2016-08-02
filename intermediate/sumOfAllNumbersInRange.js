function sumAll(arr) {
  var total = 0;
  var highest = Math.max(...arr);
  var lowest = Math.min(...arr);
  
  console.log(lowest);
  console.log(highest);
  
  for(i=lowest; i<=highest; i++) {
    total += i;
  }
  return total;
}

sumAll([1, 4]);
