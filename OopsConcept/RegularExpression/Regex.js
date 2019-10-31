/**
* Execution       :   1. default node      cmd> node .js 
*                     
* 
*  @Purpose         : Read in the following message: Hello <<name>>, We have your full name as <<full name>>
*                     in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of 
*                     any clarification Thank you BridgeLabz 01/01/2016. Use Regex to replace name, 
*                     full name, Mobile#, and Date with proper value.
* 
*  @file           : Regex.js
*  @module         :  - Rice,Pulses,Wheat,total
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 15-10-2019

*/
const input=require('readline-sync')

let Str="Hello <<name>>, We have your full name\r\n"
        + "as <<fullname>> in our system. your contact number is +91-­xxxxxxxxxx. Please,let us\r\n"
        + "know in case of any clarification Thank you BridgeLabz XX/XX/XXXX.";
let list=require('./Set&Get')
let Set=new list.Regex()    
let firstName=input.question("Enter the first name")
    Set.setFName(firstName)
let fullName=input.question("Enter the fullname")
    Set.setfullName(fullName)
let mobNo=input.question("Enter the MobNo")
    Set.setmobileNo(mobNo)
let Date=input.question("Enter the date")
    Set.setdate(Date)
console.log("==============");    
let Str1=Str.replace("<<name>>", Set.getFName())
let Str2=Str1.replace("<<fullname>>", Set.getfullName())
let Str3=Str2.replace("+91-­xxxxxxxxxx", Set.getmobileNo())
let Str4=Str3.replace("XX/XX/XXXX", Set.getdate())
console.log(Str4);

