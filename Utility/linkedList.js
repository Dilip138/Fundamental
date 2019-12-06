//creata a nodes for linkedList
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
//define a class linkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null
    this.size = 0;
  }
  //insert the data in linkedList
  insert(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node
      this.tail = node
    }
    else {
      this.tail.next = node
      this.tail = node
    }
  }
  //display the data 
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  //insert tha data at last
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // sort the data before insert then after inserted
  sortedInsert(data) {
    let node = new Node(data);
    let current = this.head;
    if (!this.head || node.data <= current.data) {
      node.next = this.head;
      this.head = node;
      this.size++;
    } else {
      while (current.next && node.data >= current.next.data) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }
  //find the data using linkedList
  findElement(fdata) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.data == fdata) {
        console.log(fdata, "Found at:", count);
        return true;
      }
      current = current.next;
      count++;
    }
    return false;
  }
  //push the data in the file  
  getArr() {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
  //delete the data 
  deleteElement(data) {
    let current = this.head;
    if (!this.head) {
      return false;
    } else if (this.head.data == data) {
      this.head = current.next;
      this.size--;
    } else {
      let prev = null;
      while (current.data != data) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  }
  //sorting the data in assending order
  sortList() {
    let current = this.head
    this.index = null;
    let temp;
    if (this.head == null) {
      return
    }
    else {
      while (current != null) {
        this.index = current.next
        while (this.index != null) {
          if (current.data > this.index.data) {
            temp = current.data
            current.data = this.index.data
            this.index.data = temp
          }
          this.index = this.index.next
        }
        current = current.next
      }
    }
  }
  //remove the duplicate element
  removeDublicate() {
    current = this.head
    this.index = null
    this.temp = null
    if (this.head = null) {
      return
    }
    else {
      while (current != null) {
        this.temp = current
        this.index = current.next
        while (this.index != null) {
          if (current.data == this.index.data) {
            this.temp.next = this.index.next
          }
          else {
            this.temp = this.index
          }
          this.index = this.index.next

        }
        current = current.next

      }
    }
  }
  //if the the two data is already exist in the file then remove otherwise add the element
  sortedInsertwodupli(data) {
    let node = new Node(data);
    let current = this.head;
    if (this.head && node.data == current.data) {
      console.log("already exists")
    }
    else if (!this.head || node.data < current.data) {
      node.next = this.head;
      this.head = node
      this.size++
    } else if (current.next && node.data == current.next.data) {
      console.log("already exists")
    } else {
      while (current.next && node.data > current.next.data) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++
    }
  }
  //sort the element after check the duplecate element otherwise add the element
  sortedInstDupFalsOrAdd(data) {
    let node = new Node(data);
    let current = this.head;
    if (this.head && node.data == current.data) {
      this.deleteElement(data)
    }
    else if (!this.head || node.data < current.data) {
      node.next = this.head;
      this.head = node
      this.size++
    } else if (current.next && node.data == current.next.data) {
      this.deleteElement(data)
    } else {
      while (current.next && node.data > current.next.data) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++
    }
  }
}
module.exports = {
  LinkedList,
  Node
};
