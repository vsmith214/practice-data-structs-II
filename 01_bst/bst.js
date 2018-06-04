function BinarySearchTree(val) {
  this.value = val;
  this.right = null;
  this.left = null;
  this.magnitude = 1;
}

BinarySearchTree.prototype.insert = function (num) {
  let direct = num >= this.value ? 'right' : 'left';

  if (this[direct]) this[direct].insert(num);
  else this[direct] = new BinarySearchTree(num);


  this.magnitude++;
}

BinarySearchTree.prototype.contains = function (num) {
  if (this.value === num) return true;
  let direct = num > this.value ? 'right' : 'left';

  return this[direct] ? this[direct].contains(num) : false;
}

BinarySearchTree.prototype.depthFirstForEach = function (fn, option = 'in-order') {
  if (option === 'pre-order') fn(this.value);
  if (this.left) this.left.depthFirstForEach(fn, option);
  if (option === 'in-order') fn(this.value);
  if (this.right) this.right.depthFirstForEach(fn, option);
  if (option === 'post-order') fn(this.value);
}

BinarySearchTree.prototype.breadthFirstForEach = function (fn) {
  var stack = [this];
  var temp;

  while (stack.length) {
    temp = stack.shift();
    fn(temp.value);
    if (temp.left) stack.push(temp.left);
    if (temp.right) stack.push(temp.right);
  }
}

BinarySearchTree.prototype.size = function () {
  return this.magnitude;
}