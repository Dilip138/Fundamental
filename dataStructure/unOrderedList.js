/**
 * @Execution : 1. default node      cmd> node unOrderedList.js 
 * @purpose   : Read the Text from a file, split it into words and arrange it as Linked List.
 *              Take a user input to search a Word in the List. If the Word is not found then add it
 *              to the list, and if it found then remove the word from the List. In the end save the
 *              list into a file
 *  @author   : Dilip
 *  @version  : 1.0
 *  @since    : 27-10-2019
 */
const input = require('readline-sync')

let list = require('../utility/linkedList');
let fs = require('fs')
file = fs.readFileSync("../utility/unOrderedList.txt")

try {
    let linklist = new list.LinkedList() // object of linkedList
    fileArr = file.toString().split(' ')
    console.log(fileArr)

    let name = input.question("Enter the data you want to search ");

    fileArr.forEach(element => {
        linklist.insert(element)
    });

    ifsearchDelElseadd = (name) => {
        if (linklist.findElement(name)) {
            linklist.deleteElement(name)
        }
        else {
            linklist.insert(name)
        }

        arr = linklist.getArr()
        fs.writeFileSync("../Utility/file.txt", arr.join(' '))
        linklist.printList()

    }
    ifsearchDelElseadd(name)
}
catch (e) {
    console.log(e.message);
    console.log(e.name);
}
