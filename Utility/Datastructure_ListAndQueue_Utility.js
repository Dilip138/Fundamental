
const readline=require('readline-sync')
/**
 * @purpose: A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam.
 *           We would like to construct an algorithm to input a string of characters and check whether 
 *           it is a palindrome.
 */

class Deque {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return !Boolean(this.items.length);
    }

    addFront(data) {
        this.items.unshift(data);
    }

    addRear(data) {
        this.items.push(data);
    }

    removeFront() {
        return this.items.shift();
    }

    removeRear() {
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }
     palindrome(str){
        let charDeque = new Deque();

        for (let i = 0; i < str.length; i++) {
            charDeque.addRear(str[i]);
        }
        
        let still = true;
        
        while (charDeque.size() > 1 && still) {
            let first = charDeque.removeFront();
            let  last = charDeque.removeRear();
            
            if (first !== last) {
                still = false;
            }
        }
        
        return still;
    }
}

/**
 * @purpose: Number of Binary Search Tree
 */
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.left=null
        this.right=null;  
          
        }
    
    }
class BinarySearch{
    constructor(){
        this.root=null
        this.left=null
    }
    insert(data){
        let newNode=new Node(data)
        if(this.root===null){
            this.root=newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode){
        if(newNode.data<node.data){
            if(node.left===null)
                node.left=newNode
            
            else
                this.insertNode(node.left,newNode)   
        }
        else{
            if(node.right===null)
                node.right=newNode
                
                else
                this.insertNode(node.right,newNode)  
        }
    }
    inorder(node) {

        if(node !== null){ 
    
                this.inorder(node.left); 
                console.log(node.data); 
                this.inorder(node.right); 
        } 
    } 
    preorder(node) { 

        if(node != null){ 

                console.log(node.data); 
                this.preorder(node.left); 
                this.preorder(node.right); 
        } 
    } 
    postorder(node){
        if(node != null){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data)

        }
    } 
    getRootNode(){
        return this.root;
    } 

}
// let Bst=new BinarySearch()
//         Bst.insert(10)
//         Bst.insert(8)
//         Bst.insert(7)
//         Bst.insert(5)

// let root=Bst.getRootNode();
//         Bst.inorder(root)

/**
 * @purpose:Create a Program which creates Banking Cash Counter where people come in to deposit 
 * Cash and withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw 
 * money and dequeue the people. Maintain the Cash Balance.
 */
class QNode{
    constructor(data){
        this.data=data;
        this.next=null
        
    }
}
class Queue{
    
    constructor(){
        this.front=null
        this.rear=null
        this.size=0        

    }
    isEmpty(){
        return this.size
    }
    enqueue(data){
        let node=new QNode(data)
            if(this.rear==null){
                this.rear=node;
                this.front=node
            }
            else{
                this.rear.next=node
                this.rear=node
            }

        }
    
    dequeue(){
        let data=this.front.data
        this.front.data=this.front.next
        if(this.isEmpty()){
            this.rear=null
        }
        this.size--
        return data
    }
    size(){
        return this.size
    }
    
}
// let q=new Queue()
//     q.enqueue(20)  
//     q.enqueue(30)
//     q.dequeue()
//     q.dequeue()
//     q.enqueue(10)
//     q.enqueue(60)
//     console.log("Dequeued item is " + q.dequeue())
   
/**
 * @purpose:Create a Slot of 10 to store Chain of Numbers that belong to each Slot to efficiently 
 *          search a number from a given set of number 
 *          read a set of numbers from a file and take user input to search a number
 */

hashFunc = (X, Num) => {
    const fs = require('fs')
    const List = require('../Utility/linkedList')
    nums = X.toString().split(' ')
    let arr = [];
    for (let i = 0; i < 11; i++) {
        arr[i] = new List.LinkedList;
    }
    for (let i in nums) {
        let j = parseInt(nums[i]) % 11;
        arr[j].sortedInsertwodupli(parseInt(nums[i]));
    }
    for (i in arr) {
        console.log(i)
        arr[i].printList()
    }
    var finalArr = []
    let j = Num % 11;
    arr[j].sortedInstDupFalsOrAdd(Num)
    for (let i in arr) {
        let arr2 = arr[i].getArr()
        for (let j in arr2) {
            finalArr.push(arr2[j])
        }
    } console.log('FA', finalArr)
    fs.writeFileSync('../Utility/file3.txt', finalArr.join(' '))

    for (i in arr) {
        console.log(i)
        arr[i].printList()
    }
}
    // module.exports = { hashFunc }


    module.exports={
        BinarySearch,Deque,Queue,hashFunc
        }

