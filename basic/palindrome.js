function palindrome(str) {
  //remove character of given str then lower case it
  var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  //reverse string then remove special characters then lower case it
  var reverseString = removeChar.split('').reverse().join();

  var shit = reverseString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  console.log(reverseString);
  console.log(shit);
  console.log("removeChar: "+removeChar+"...reverse: "+reverseString);
  console.log(removeChar == reverseString);
  return removeChar == shit;
}
palindrome("not a palindrome");
