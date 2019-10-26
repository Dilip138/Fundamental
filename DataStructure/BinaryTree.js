/**
* Execution       :   1. default node      cmd> node .js 
*                     
* 
*  @Purpose        : Number of Binary Search Tree
*
*  @file           : BinaryTree.js
*  @module         : BinarySearchTree -inser,inserNode,preorder,inorder,postorder,getRootNode
*  @author         : Dilip 
*  @version        : 1.0
*  @since          : 15-10-2019

*/

//    const access=require('../Utility/Datastructure_ListAndQueue_Utility')
//    let c=new access.BinarySearch()

let list=require('../Utility/Datastructure_ListAndQueue_Utility')
let Bst=new list.BinarySearch()
let input = require('readline-sync')
let num = input.question('Enter the no of inputs:')
for (let i=0;i<num;i++){
    let data1 = input.question('Enter the data:')
    Bst.insert(data1)
}
   
    let root=Bst.getRootNode()
             Bst.inorder(root)


    

