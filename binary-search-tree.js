class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
  
    if (!this.root) {
      this.root = newNode;
      return this;
    }
  
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
  
    const insertHelper = (node) => {
      if (val < node.val) {
        if (node.left === null) {
          node.left = new Node(val);
          return;
        }
        insertHelper(node.left);
      } else {
        if (node.right === null) {
          node.right = new Node(val);
          return;
        }
        insertHelper(node.right);
      }
    };
  
    insertHelper(current);
    return this;
  }
  

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

   // Find method using iteration
   find(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) {
        return current;
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }

  // Find method using recursion
  findRecursively(val, current = this.root) {
    if (!current) {
      return undefined;
    }
    if (val === current.val) {
      return current;
    }
    return val < current.val
      ? this.findRecursively(val, current.left)
      : this.findRecursively(val, current.right);
  }

  // DFS Pre-order
  dfsPreOrder() {
    const values = [];
    const traverse = (node) => {
      values.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return values;
  }

  // DFS In-order
  dfsInOrder() {
    const values = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      values.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return values;
  }

  // DFS Post-order
  dfsPostOrder() {
    const values = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.val);
    };
    traverse(this.root);
    return values;
  }

  // BFS
  bfs() {
    const values = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      values.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return values;
  }

  
}

module.exports = BinarySearchTree;
