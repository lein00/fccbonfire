function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins.split(/(?=[A-Z])/).join("-")
  var converted = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return converted.split(' ').join('-').split('_').join('-').toLowerCase();
  //return str.split(' ').join('-').split('_').join('-').split(/(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('thisIsSpinalTap');
