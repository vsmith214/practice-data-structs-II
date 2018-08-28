const BinarySearchTree = function(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.length = 1;

    BinarySearchTree.prototype.insert = function(val) {
        let node = new BinarySearchTree(val);
        let direction = val >= this.value ? "right" : "left";

        if(this[direction]) this[direction].insert(val);
        else this[direction] = node;
        this.length++;
    }

    BinarySearchTree.prototype.contains = function(val) {

        if(this.value === val) return true;

        let direction = val >= this.value ? "right" : "left";
        return !this[direction] ? false : this[direction].contains(val);      
    }

    BinarySearchTree.prototype.depthFirstForEach = function(fn, option='in-order') {
       if(option === 'pre-order') fn(this.value);
       if(this.left) this.left.depthFirstForEach(fn, option);
       if(option === 'in-order') fn(this.value);
       if(this.right) this.right.depthFirstForEach(fn, option);
       if(option === "post-order") fn(this.value);
    }

    BinarySearchTree.prototype.breadthFirstForEach = function(fn) {
        let stack = [this], temp;
        
        while(stack.length) {
            temp = stack.shift();
            fn(temp.value);
            if(temp.left) stack.push(temp.left);
            if(temp.right) stack.push(temp.right);
        }

    }

    BinarySearchTree.prototype.size = function() {
        return this.length;
    }
}

