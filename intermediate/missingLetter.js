function fearNotLetter(str) {
  //console.log(str.charAt(0) + " "+ str.charCodeAt(0));
  var letterCode = str.charCodeAt(0);
  var counter = 0;

  while(counter <= str.length - 1) {

    if(String.fromCharCode(letterCode) != str.charAt(counter)) {
      return String.fromCharCode(letterCode);
    }
    counter++;
    letterCode++;
  }
  return undefined;
}

fearNotLetter("abce");
