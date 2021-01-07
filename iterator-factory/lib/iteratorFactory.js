class IteratorFactory {
  constructor(array) {
    this.collection = array;
  }


  sum(arr) {
    var total = 0;

    if(!arr) {
      arr = this.collection;
    }

    if (typeof arr[0] === 'string') {
      total = '';
    }

    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }

    return total;
  }

  sumAndSquare(arr) {
    var sum = this.sum(arr);

    return sum * sum;
  }

  onlyEvens(arr) {
    var evens = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(arr[i])
      }
    }

    return evens;
  }

  squareAndSum(arr) {

    let squares = [];

    for (var i = 0; i < arr.length; i++) {
      squares.push(arr[i]*arr[i])
    }

    return this.sum(squares);

  }

};

module.exports = IteratorFactory;
