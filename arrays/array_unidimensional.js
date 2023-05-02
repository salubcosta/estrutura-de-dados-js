var avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

console.table(avgTemp); // Mostra todo o conteúdo do array em forma de tabela

console.log(avgTemp); // Mostra todo conteúdo do array

console.log(avgTemp[2]); // Mostra conteúdo do array na posição 2. output: 42

// var daysOfWeek = new Array();
var daysOfWeek = new Array(
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
);

//console.log(daysOfWeek[0]); // Mostra um registro do array na posição 0

//Para mostrar todos
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

// Sequencia de fibonacci
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 0; i <= 10; i++) {
  fibonacci[3 + i] = fibonacci[i + 1] + fibonacci[i + 2];
  console.log(fibonacci[i]);
}
// Fibonacci de um valor 10 é 55.

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[10] = 10; // ou numbers[numbers.length];

numbers[numbers.length] = 11; // ou numbers[10] = 11

// Método nativo para inserir elementos no final do arrya
numbers.push(12);
numbers.push(13);
numbers.push(14);
numbers.push(15);
numbers.push(16);

// Método nativo para inserir elemento no começo do array
numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);
numbers.unshift(-4);

console.log(numbers);

// Remover o último elemento com método nativo do array
numbers.pop(); // remove o 16
numbers.pop(); // remove o 15

numbers.shift(); // remove o -4
numbers.shift(); // remove 0 -3
numbers.shift(); // remove o -2
numbers.shift(); // remove 0 -1

console.log(numbers);

numbers.splice(3, 3); // a partir da posição 3, ele remove 3 elementos (remove 3,4 e 5);

console.log(numbers);
// Se eu quiser inserir usando splice é possível
numbers.splice(3, 0, 3, 4, 5); // a partir da posição 3, remove 0 elementos e insere: 3, 4 e 5

console.log(numbers);
