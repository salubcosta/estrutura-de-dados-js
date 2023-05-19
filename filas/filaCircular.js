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

function hotPotator(nameList, num) {
  var queue = new Queue();

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = "";

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(`${eliminated} was eliminated from Hot Potato game`);
  }
  return queue.dequeue();
}

var names = ["João", "Maria", "Ana", "Milena", "Bianca"];
var winner = hotPotator(names, 7);

console.log(`The winner is: ${winner}`);
