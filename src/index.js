class Sorter {
  constructor(array) {
  if (array) {
    this.array = array;
  } else {
    this.array = [];
  }
  this.currentCond = false;
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
    indices.sort((a, b) => { return a - b; });
    let sortedArray = [];
    for (let i = 0; i < indices.length; i++) {
      sortedArray.push(this.array[indices[i]]);
    }
    if (this.currentCond == true) {
      sortedArray.sort(this.compareFunction);
    } else {
      sortedArray.sort((a, b) => { return a - b; });
    }
    for (let i = 0; i < indices.length; i++) {
    this.array[indices[i]] = sortedArray[i];
  }
}

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
    this.currentCond = true;
  }
}

module.exports = Sorter;