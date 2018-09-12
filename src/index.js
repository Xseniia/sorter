class Sorter {

  constructor(array) {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let sortedArray = [];
    for (var i = 0; i < indices.length; i++) {
      sortedArray.push(this.array[indices[i]]);
    }
    for(let j = 0; j < sortedArray.length; i++){
      for(let k = j; k < sortedArray.length; k++) {
        sortedArray.sort((a, b) => {return a - b;} );
      }
    }
    return sortedArray;
  }

  //  setComparator(compareFunction) {
  //
  // }
}

module.exports = Sorter;
