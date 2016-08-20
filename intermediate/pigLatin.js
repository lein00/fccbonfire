function translate(str) {
  var splited = str.split('');
  var vowel = /[aeiouAEIOU]/;

  //check if first letter is vowel
  if(vowel.test(splited[0])){
    //append way to end of the string
    return splited.join('') + 'way';
  }

    while (true) {
    if (!vowel.test(splited[0])) {
      splited.push(splited.splice(0, 1));
    } else {
      break;
    }
  }
  return splited.join('') + 'ay';
}

translate("consonant");
