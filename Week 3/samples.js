// class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     // Build Min Heap from an array of values
//     buildHeap(values) {
//         this.heap=[...values]
//         for(let i=0;i<values.length;i++){
//             this.heapifyDown(i)
//         }
//     }
  
//     // Insert a new element into the Min Heap
//     insert(element) {
//       this.heap.push(element);
//       this.heapifyUp(this.heap.length - 1);
//     }
  
//     // Remove and return the minimum element (root) from the Min Heap
//     removeMin() {
//       if (this.heap.length === 0) {
//         return null;
//       }
//       if (this.heap.length === 1) {
//         return this.heap.pop();
//       }
  
//       const min = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.heapifyDown(0);
//       return min;
//     }
  
//     // Restore Min Heap property from top to bottom
//     heapifyDown(index) {
//       while (true) {
//         const leftChild = 2 * index + 1;
//         const rightChild = 2 * index + 2;
//         let smallest = index;
  
//         if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
//           smallest = leftChild;
//         }
  
//         if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
//           smallest = rightChild;
//         }
  
//         if (index !== smallest) {
//           [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//           index = smallest;
//         } else {
//           break;
//         }
//       }
//     }
  
//     // Restore Min Heap property from bottom to top
//     heapifyUp(index) {
//       while (index > 0) {
//         const parentIndex = Math.floor((index - 1) / 2);
//         if (this.heap[index] < this.heap[parentIndex]) {
//           [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//           index = parentIndex;
//         } else {
//           break;
//         }
//       }
//     }
//   }
  
//   // Example Usage for Min Heap
//   const minHeap = new MinHeap();
//   minHeap.buildHeap([8, 7, 6, 5, 4, 3, 2, 1]);
//   console.log("Min Heap:", minHeap.heap); // Output: [1, 4, 2, 5, 7, 6, 8, 3]
//   minHeap.insert(0);
//   console.log("Min Heap after Insert:", minHeap.heap); // Output: [0, 4, 1, 5, 7, 6, 8, 3, 2]
//   console.log("Removed Min Element:", minHeap.removeMin()); // Output: 0
//   console.log("Min Heap after Removal:", minHeap.heap); // Output: [1, 4, 2, 5, 7, 6, 8, 3]




  // class MaxHeap {
  //   constructor() {
  //     this.heap = [];
  //   }

  //   insert(element) {
  //     this.heap.push(element);
  //     this.heapifyUp(this.heap.length - 1);
  //   }
  
  //   extractMax() {
  //     if (this.heap.length === 0) {
  //       return null;
  //     }
  //     if (this.heap.length === 1) {
  //       return this.heap.pop();
  //     }
  
  //     const max = this.heap[0];
  //     this.heap[0] = this.heap.pop();
  //     this.heapifyDown(0);
  //     return max;
  //   }
  
  //   // Restore heap property from bottom to top
  //    heapifyUp(index) {
  //     while(index > 0) {
  //         const parentIndex = Math.floor(index-1 / 2);
  //         if(this.heap[parentIndex] < this.heap[index]) {
  //             [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]];
  //             index = parentIndex;
  //         } else {
  //             break;
  //         }
  //     }
  //   }
  
  //   // Restore heap property from top to bottom
  //   heapifyDown(index) {
  //     while (true) {
  //       const leftChild = 2 * index + 1;
  //       const rightChild = 2 * index + 2;
  //       let largest = index;
  
  //       if (leftChild < this.heap.length &&this.heap[leftChild] > this.heap[largest]) {
  //         largest = leftChild;
  //       }
  
  //       if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]){
  //         largest = rightChild;
  //       } 
  //       if (index !== largest) {
  //         [this.heap[index], this.heap[largest]] = [this.heap[largest],this.heap[index]];
  //         index = largest;
  //       } else {
  //         break;
  //       }
  //     }
  //   }
  
  //   // Build a heap from an array of elements
  //   buildHeap(arr) {
  //     this.heap = [...arr];
  //     for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
       
  //       this.heapifyDown(i);
  //     }
  //   }
  
  //   // Get the maximum element without removing it
  //   getMax() {
  //     return this.heap.length > 0 ? this.heap[0] : null;
  //   }
  
  //   // Check if the heap is empty
  //   isEmpty() {
  //     return this.heap.length === 0;
  //   }
  
  //   // Get the size of the heap
  //   size() {
  //     return this.heap.length;
  //   }
  
  //   // Convert the heap to a string for display
  //   toString() {
  //     return this.heap.toString();
  //   }   
  
  //   remove(element) {
  //     const indexToRemove = this.heap.indexOf(element);
  //     if (indexToRemove === -1) {
  //       return false;
  //     }
  //       this.heap[indexToRemove] = this.heap.pop();
  //       this.heapifyUp(indexToRemove);
  //       this.heapifyDown(indexToRemove);
  
  //     return true;
  //   }
  // }
  
  // // Example Usage for Max Heap
  // const maxHeap = new MaxHeap();
  // maxHeap.insert(20);
  // maxHeap.insert(10);
  // maxHeap.insert(30);
  // maxHeap.insert(5);
  // maxHeap.insert(25);
  
  // console.log("Max Heap:", maxHeap.toString());
  // console.log("Extract Max:", maxHeap.extractMax());
  // console.log("Max Heap after extraction:", maxHeap.toString());
  // maxHeap.buildHeap([4, 10, 3, 5, 1]);

//   class HeapSort {
//     sort(arr) {
//         const n = arr.length;
//         for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//             this.heapify(arr, n, i);
//         }
//         for (let i = n - 1; i > 0; i--) {     
//             [arr[0], arr[i]] = [arr[i], arr[0]];   
//             this.heapify(arr, i, 0);
//         }
//         return arr;
//     }

//     heapify(arr, n, i) {
//         let largest = i; 
//         const left = 2 * i + 1; 
//         const right = 2 * i + 2; 

//         if (left < n && arr[left] > arr[largest]) {
//             largest = left;
//         }
//         if (right < n && arr[right] > arr[largest]) {
//             largest = right;
//         }
//         if (largest !== i) {
//             [arr[i], arr[largest]] = [arr[largest], arr[i]];       
//             this.heapify(arr, n, largest);
//         }
//     }
// }


// const heapSort = new HeapSort();
// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// const sortedArray = heapSort.sort(unsortedArray);
// console.log("Sorted array:", sortedArray);

// class Graph{
//     constructor(){
//         this.list={}
//     }

//     addVertec(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex]=new Set()
//         }
//     }

//     addDirectEdge(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertec(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addVertec(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//     }
//     addUndirectEdge(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertec(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addVertec(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//         this.list[vertex2].add(vertex1)
//     }
//     display(){
//         for(let x in this.list){
//             console.log(x,'->',[...this.list[x]]);
//         }
//     }
//     hasEdge(vertex1,vertex2){
//         return (
//             this.list[vertex1].has(vertex2)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.list[vertex]){
//             return
//         }
//         for(let x of this.list[vertex]){
//             this.removeEdge(vertex,x)
//         }
//         delete this.list[vertex]
//     }
    

// }


// const graph=new Graph()
// graph.addVertec('a')
// graph.addVertec('b')
// graph.addDirectEdge('a','b')
// graph.addUndirectEdge('b','c')
// graph.addDirectEdge('b','a')
// graph.display()
// graph.removeEdge('a','b')
// graph.display()
// graph.removeVertex('b')
// graph.display() 

class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (const char of word) {
        if (!current.children.has(char)) {
          current.children.set(char, new TrieNode());
        }
        current = current.children.get(char);
      }
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
      for (const char of word) {
        if (!current.children.has(char)) {
          return false;
        }
        current = current.children.get(char);
      }
      return current.isEndOfWord;
    }
  
    delete(word) {
      this.deleteRecursive(this.root, word, 0);
    }
  
    deleteRecursive(node, word, index) {
      if (!node) {
        return;
      }
  
      if (index === word.length) {
        if (node.isEndOfWord) {
          node.isEndOfWord = false;
        }
        return node.children.length === 0;
      }
  
      const char = word[index];
      const childNode = node.children.get(char);
  
      if (!childNode) {
        return false;
      }
  
      const shouldDeleteNode = this.deleteRecursive(childNode, word, index + 1);
  
      if (shouldDeleteNode) {
        node.children.delete(char);
        return node.children.length === 0;
      }
  
      return false;
    }
  
    getWordsWithPrefix(prefix) {
      let current = this.root;
  
      for (let char of prefix) {
        if (!current.children.has(char)) {
          return [];
        }
        current = current.children.get(char);
      }
  
      const words = [];
      this.collectWords(current, prefix, words);
  
      return words;
    }
  
    collectWords(node, currentWord, result) {
      if (node.isEndOfWord) {
        result.push(currentWord);
      }
  
      for (let [char, childNode] of node.children) {
        this.collectWords(childNode, currentWord + char, result);
      }
    }
  }
  
  const trie = new Trie();
  
  trie.insert("apple");
  trie.insert("app");
  console.log(trie.search("apple"));
  console.log(trie.search("app"));
  console.log(trie.search("ap"));
  
  trie.delete("app");
  console.log(trie.search("apple"));
  console.log(trie.search("app"));
