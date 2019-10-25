function primeAnagram(n){
    if (n == 0 || n == 1) {
        return false;
      }
      for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          return false;
        }
      }
      return true;
    }
    let a=[[]]
    let k = 0;
    for (let i = 0; i < 10; i++) {
        a[i]=[10]
      for (let j = 0; j < 100; j++) {
          a[i][j]=[10][100]
        if (primeAnagram(k)) {
          console.log("" + k);
          k++;
        } else {
          k++;
        }
      }
      console.log(" ");
     }
     var  c=[]
     function ispaliindrome(k){
         let temp=sum;
         while(k>0){
            let sum=0
            let rem=k%10
            sum=rem+sum*10;
            k=k/10
         }
         if(temp==sum){
             var b=push.c[k]
             console.log(b);
             
         }
    }
    