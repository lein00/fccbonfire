function repeat(str, num) {
 if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeat(str, num - 1);
}

repeat("*", 3);
