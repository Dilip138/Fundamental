 const readline=require('readline-sync'); 
 /**
  * @purpose : Computes the prime factorization of N using brute force..
  */


 exports.primeFactor = (userInput) => {
     for(let i = 2;i<= userInput;i++){
         if (userInput %i==0){
             console.log(i)
             userInput/=i;
         }
 }
},
/**
 * @purpose: Computes the prime Number of N using brute force..
 */
exports.primeNumber=(userInput)=>{
    for(let i=0;i<=userInput;i++){
        let count=0;
        for(let n=0;n<=i; n++){
            if(i%n==0){
                count++;      
            }
        }
            if(count==2)
                console.log(i+"")    
    }
},
/**
 * @purpose: Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 */
exports.harmonic=(InputNumber)=>{
    let  sum=0;
    for(let i=1;i<=InputNumber;i++){
        sum = sum + 1/i;
    
        console.log(sum)
    }
},
/**
 * @purpose:  Print the year is a Leap Year or not.
 */
exports.leapYear=(userInput)=>{ 
    let year = userInput;
    let answer;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        answer = "leap year";
    } else {
        answer = "Not a leap year";
    }
    console.log(answer);
},
/**
 * @purpose: Flip Coin and print percentage of Heads and Tails.
 */
exports.flipCoin=(toss)=>{
    let head=0;
    let tail=0;
   for(let i=0;i<toss;i++){
    if(Math.random()>0.5){
        head++
    } else{
        tail++
    }
}
    let headpercentage=(head*100)/toss;
    console.log(headpercentage)
    let tailpercentage=(tail*100)/toss;
     console.log(tailpercentage)
    
    
},
/**
 * @purpose: prints a table of the powers of 2 that are less than or equal to 2^N.
 */
exports.power2=(userInput)=>{
    for(let i=0;i<userInput;i++){
        if(0 <= i < 31){
            console.log(Math.pow(2,i));
        }
        
    }
}

/**
 * @purpose: 
 */
   exports.nameReplace=(str)=>{
       let str_length=str.length
       if(str_length>3 && str>="a" && str<="z"|| str>="A" && str<="Z" ){
           let str1="Hi <<UserName>> how r u";
           let result=str1.replace("<<UserName>>",str);
           console.log(result)
       }
           else{
               console.log("please enter the minimum character 3")

           }
       }
       
       
   
   /**
    * @purpose: Print function to print 2 Dimensional Array.
    */
   exports.array2D=()=>{
        
        let num = readline.question('Enter the ele');
        let row = readline.questionInt('row'); 
        let col = readline.questionInt('col');; 
        let i = 0;

        let  array2D = [[]];
        for(let r = 0; r < row; ++r)
    {
            array2D[r] = [];
             for(let c = 0; c < col; ++c)
        {
        array2D[r][c] = num[i++];
    }
}
    console.log(array2D); 
}
   /**
    * @purpose:Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
    */
   exports.sumOfThree=()=>{
       let arr=[4,3,6,7,-13,8]
       for(let i=0;i<arr.length;i++){
           for(let j=i+1;j<arr.length;j++){
               for(let k=j+1;k<arr.length;k++){
                   if(arr[i]+arr[j]+arr[k]==0){
                       console.log("Number of distinct triplet")    
                   }else{
                       console.log("not a distinct triplet")
                   }
               }
           }
       }
   }
   /**
    * @purpose: Write a program ​ Distance.java t ​ hat takes two integer command-line arguments x
    and y and prints the Euclidean distance from the point (x, y) to the origin (0, 0). The
    formulae to calculate distance = sqrt(x*x + y*y). Use Math.power function.
    */
   exports.distance=()=>{
       let x=readline.question("Enter the number of x")
       let y=readline.question("Enter the number of y")
       let X=Math.floor(Math.pow(x,2));
      let Y=Math.floor(Math.pow(y,2));
      let dist=Math.floor(Math.sqrt(X-Y));
       console.log("distance from (" + X+ ", " + Y+ ") to (0, 0) = " + dist);
       
   }