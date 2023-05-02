var arrFull = [];
var arr = [];
var arr1 = [];
var arr2 = [];

arr[0] = [01, 02, 03, 04, 05];
arr[1] = [06, 07, 08, 09, 10];
arr[2] = [11, 12, 13, 14, 55];
arr[3] = [11, 12, 13, 14, 15];

arr1 = [arr[0], arr[1]]; //arr1 na posição [0] terá arr[0] e na posição [1] terá arr[1]
arr2 = [arr[2], arr[3]]; //arr2 na posição [0] terá arr[2] e na posição [1] terá arr[3]

arrFull = [arr1, arr2]; // No meu arrFull eu vou ter: na posição [0] o arr1 contendo arr[0] e arr[1]
//na posição [1] o arr2 contendo arr[2] e arr[3]

console.log(arrFull[0][1][4]); // output: 10

/**
 *
 * Para exemplificar:
 * [01, 02, 03, 04, 05]
 * [06, 07, 08, 09, 10]
 * [11, 12, 13, 14, 55]
 * [11, 12, 13, 14, 15]
 *
 * Se eu quiser pegar o valor 55 partir do arrFull,
 * terei que passar as seguintes coordenadas, lembrando que
 * o valor 55 está dentro do arr[2] e que o arr[2] está dentro
 * do arr2 na posição 0. logo, considerando que o arr2 está na
 * posição 1 do arrFull, devo passar a chave da linha 1
 * arrFull[1] agora estou dentro do arr2 que contem arr[2] e arr[3],
 * o arr[2] está na posição 0, então devo pegá-lo assim: arrfull[1][0],
 * pronto. Estou com o arr[2] selecionado, agora basta percorrer até o
 * 55 que está na posição 4. então para exibir o valor 55 deve passar:
 * arrFull[1][0][4].
 *
 * Segue o console.log()
 */
console.log(arrFull[1][0][4]); //output: 55

//Lendo arrFull

for (var x = 0; x < arrFull.length; x++) {
  for (var y = 0; y < arrFull[x].length; y++) {
    for (var z = 0; z < arrFull[x][y].length; z++) {
      console.log(arrFull[x][y][z]);
    }
  }
}
