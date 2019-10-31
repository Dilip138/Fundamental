
let fs=require('fs')
let content=fs.readFileSync('clinic.json', 'utf8')
let obj=JSON.parse(content)
console.log(content);
console.log("======================")
console.log("A doctor at any availability time can see only 5 patients.")
console.log("======================")
let len=obj.Patient.length;
for(i=0;i<len;i++){
    if(i<5){
    let name = obj.Patient[i].name;
    let id = obj.Patient[i].id;
    let mobNo = obj.Patient[i].MobNo;

    console.log("Name : " + name + " , " + "id : " + id + " , " + "MobNo : " + mobNo);
    }
   
}



