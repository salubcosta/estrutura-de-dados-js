function Queue() {
  var items = [];

  this.enqueue = function (element) {
    // Add novo item
    items.push(element);
  };

  this.dequeue = function () {
    // remove um item
    return items.shift();
  };

  this.front = function () {
    // retorna o primeiro elemento da fila
    return items[0];
  };

  this.isEmpty = function () {
    // verifica se a fila está vazia
    return items.length === 0;
  };

  this.size = function () {
    // retorna o tamanho da fila
    return items.length;
  };

  this.print = function () {
    // imprime a fila no console
    console.log(items.toString());
  };
}

var queue = new Queue();

queue.enqueue("Goku");
queue.enqueue("Vegeta");
queue.enqueue("Mestre Kame");

queue.print(); // Goku,Vegeta,Mestre Kame

queue.dequeue(); // Goku

queue.print(); // Vegeta,Mestre Kame
