function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    // Adiciona elemento no final da lista
    var node = new Node(element);
    var current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.insert = function (position, element) {
    // Adiciona um elemento em uma posição específica
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    // Remove um elemento de uma posição específica
    if (position > -1 && position < length) {
      // Elimina um elemento
      var current = head,
        previous,
        index = 0;
      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;
    } else {
      // Não deu certo!
      return null;
    }
  };

  this.remove = function (element) {
    // Remove o elemento element
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function (element) {
    // Retorna a posição do elemento
    var current = head,
      index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  this.isEmpty = function () {
    // Verifica se a lista ligada está vazia
    return length === 0;
  };

  this.size = function () {
    // Retorna o tamanho da instância
    return length;
  };

  this.getHead = function () {
    return head;
  };

  this.toString = function () {
    // Converte em String
    var current = head,
      str = "";
    while (current) {
      str += `[${current.element}] `;
      current = current.next;
    }
    return str;
  };

  this.print = function () {
    // Imprime no console
    console.log(this.toString());
  };
}

var ll = new LinkedList();
ll.append("João");
ll.append("José");
ll.append("Maria");

ll.print();

ll.removeAt(2);

ll.print();

ll.append("Maria");

ll.print();

ll.insert(0, "Carla");

ll.print();

ll.insert(2, "Ana");

ll.print();

console.log(ll.indexOf("Ana")); // 2

ll.print();

console.log(ll.remove("Ana"));

ll.print();

console.log(ll.getHead());
