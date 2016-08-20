function uniteUnique(arr) {
  var test = Array.from(arguments);
  var test2 = Array.prototype.slice.call(arguments);
  return test.reduce(function(previousValue, currentValue, currentIndex, array) {
    //console.log(previousValue);
    //console.log(currentValue);

    return previousValue.concat(currentValue.filter(function(value) {
      //console.log(previousValue.indexOf(value) === -1);
      return previousValue.indexOf(value) === -1;
    }));
  });

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//uniteUnique([1, 3, 2], [1, [2, 4]]);
