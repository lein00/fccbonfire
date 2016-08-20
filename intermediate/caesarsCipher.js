function rot13(str) { // LBH QVQ VG!
  
  var finalString = str.split('').map(function(char) {
    //convert character to ascii code
    x = char.charCodeAt(0);
    
    //check if character is from A-Z
    if (x < 65 || x > 90) {
      return String.fromCharCode(x);//spaces and special characters do nothing
    } else if(x < 78) {//N = ASCII 78, so shift forward
      return String.fromCharCode(x + 13);
    }
    return String.fromCharCode(x - 13);// shift backward
  });
  
  return finalString.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
