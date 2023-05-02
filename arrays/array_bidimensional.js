var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25.7];
var avgTempWeek2 = [27, 23.4, 33, 25.2, 19, 29.9, 22.2];

var avgTempWeek = [];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

console.log(avgTempWeek[0][3]); //output: 27

var arrayBidimensional = [];

arrayBidimensional[0] = [1, 2, 3, 4, 5];
arrayBidimensional[1] = [6, 7, 8, 9, 10];

console.log(arrayBidimensional[0][4]); //output: 5

// Ler array bidimensional

for (var x = 0; x < arrayBidimensional.length; x++) {
  console.log("TAMANHO 1: " + arrayBidimensional.length);
  for (var y = 0; y < arrayBidimensional[x].length; y++) {
    console.log("TAMANHO 2: " + arrayBidimensional[x].length);
    console.log(arrayBidimensional[x][y]);
  }
}
