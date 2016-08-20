function titleCase(str) {
  var splited = str.split(' ');
  var shit = [];

  for(var ctr=0; ctr<splited.length; ctr++)
    {
      temp = splited[ctr].toLowerCase();
      temp = temp.charAt(0).toUpperCase() + temp.substring(1);
      //shit.push(splited[ctr].charAt(0).toUpperCase());
      shit.push(temp);
    }
  console.log(shit);
  var joined = splited.join(' ');
  console.log(joined);
  return shit.join(' ');
}

titleCase("I'm a little tea pot");
