const HashTable = function() {
    this.numBuckets = 35;
   

    HashTable.prototype.get = function(key) {
        let hashKey = this.hash(key);

       // console.log(this[hashKey].search(key));
    }

    HashTable.prototype.set = function(key, val) {
        let hashKey = this.hash(key);
    
        if(!this[hashKey]) this[hashKey] = new LinkedList();
        this[hashKey].addToTail({ [key]: val});
    }

    HashTable.prototype.hasKey = function(key) {
        
    }

    HashTable.prototype.hash = function(val) {
        let sum = 0;

        for(let i=0; i < val.length; i++) {
            sum += val.charCodeAt(i);
        }
        return sum % this.numBuckets;

    }
}



const LinkedList = function() {
    this.head = null;
    this.tail = null;

    LinkedList.prototype.addToTail = function(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
    }

    LinkedList.prototype.addToHead = function(val) {
        let node = new Node(val);
        
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }
    }

    LinkedList.prototype.removeHead = function() {
        let node;
        if(!this.head) node = null;
        else node = this.head.value;

        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
        }
        return node;
    }

    LinkedList.prototype.removeTail = function() {
        let node;
        if(!this.head) node = null;
        else node = this.tail.value;

        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.previous;
            this.tail.next = null;
        }
        return node;
    }

    LinkedList.prototype.search = function(val) {  
        let current = this.head;

        while(current) {
            if(typeof(val) === 'string') {
                if(current.value === val) return current.value;
            } else if(val(current.value)) return current.value;
            
            current = current.next;
        }
        return null;
    }

}

const Node = function(val) {
    this.value = val;
    this.next = null;
    this.previous = null;
}