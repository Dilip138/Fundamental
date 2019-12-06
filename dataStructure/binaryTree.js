/**
*  @Execution      :   1. default node      cmd> node binaryTree.js 
*  @Purpose        : Number of Binary Search Tree
*  @file           : binaryTree.js
*  @module         : binarySearchTree -inser,inserNode,preorder,inorder,postorder,getRootNode
*  @author         : Dilip 
*  @version        : 1.0
*  @since          : 23-10-2019
*/
let list = require('../utility/datastructure_listAndqueue_qtility')
let Bst = new list.BinarySearch()
let input = require('readline-sync')
let num = input.question('Enter the no of inputs:')
for (let i = 0; i < num; i++) {
    let data1 = input.question('Enter the data:')
    Bst.insert(data1)
}
let root = Bst.getRootNode()
Bst.inorder(root)
