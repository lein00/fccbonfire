function pair(str) {
var dna = [];
var tempSubArr = [];

for (i=0; i<str.length; i++) {

if (str[i]==="G") {
tempSubArr = [str[i], "C"];
dna.push(tempSubArr);
}

if (str[i]==="C") {
tempSubArr = [str[i], "G"];
dna.push(tempSubArr);
}

if (str[i]==="A") {
tempSubArr = [str[i], "T"];
dna.push(tempSubArr);
}

if (str[i]==="T") {
tempSubArr = [str[i], "A"];
dna.push(tempSubArr);
}



}

return dna;
}


pair("GCG");
