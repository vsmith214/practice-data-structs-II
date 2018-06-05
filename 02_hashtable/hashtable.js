function HashTable() {
  this.numBuckets = new Array(35);
}

function Node(key, value) {
  this.key = key;
  this.value = value;
}

HashTable.prototype.hash = function (str) {
  let hashed = 0;

  for (let i = 0; i < str.length; i++) {
    hashed += str.charCodeAt(i);
  }
  return hashed % this.numBuckets.length;
}

HashTable.prototype.set = function (key, val) {
  let idx = this.hash(key);
  if (!this.numBuckets[idx]) this.numBuckets[idx] = new LinkedList();
  this.numBuckets.addToHead(new Node(key, val));
}

HashTable.prototype.get = function (key) {
  let idx = this.hash(key);

  return this.numBuckets[idx].search(function (node) {
    return node.key === key;
  }).value;
}

HashTable.prototype.hasKey = function (key) {

}