function Stack() {
  var items = [];

  this.push = function (element) {
    // Adiciona novo item à pilha
    items.push(element);
  };

  this.pop = function () {
    // Remove o item do topo da pilha
    return items.pop();
  };

  this.peek = function () {
    // Devolve o elemento que está no topo
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    // Informa se a pilha está vazia
    return items.length === 0;
  };

  this.clear = function () {
    // Limpa a pilha
    items = [];
  };

  this.size = function () {
    // Informa o tamanho da pilha
    return items.length;
  };

  this.print = function () {
    // Imprime a pilha no console
    console.log(items.toString());
  };
}

var pilha = new Stack();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

console.log(pilha.peek()); // 5
console.log(pilha.size()); // 5
console.log(pilha.isEmpty()); // false

pilha.print(); //1,2,3,4,5

console.log(pilha.pop()); // 5

pilha.print(); //1,2,3,4

pilha.clear();
console.log(pilha.isEmpty()); // true
