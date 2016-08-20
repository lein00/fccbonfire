function findLongestWord(str) {
  var splited = str.split(' ');
  console.log(splited);
  console.log(splited.length);
  var long = 0;
  for(var ctr = 0; ctr < splited.length; ctr++){
    if(splited[ctr].length > long)
      {
        long = splited[ctr].length;
      }
  }
  return long;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
