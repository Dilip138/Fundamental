class Regex{
    constructor(firstName,fullName,mobileNo,date){
        this.firstname=firstName
        this.fullname=fullName
        this.mobNo=mobileNo
        this.date=date

    }
    setFName(newName){
		this.firstname=newName;
	}

	 setfullName(fullName){
		this.fullname=fullName;
	}

	setmobileNo(mobileNo){
		this.mobNo=mobileNo;
	}

	setdate(date){
		this.date=date;
	}

	getFName(){
		return this.firstname
	}

	getfullName(){
		return this.fullname
	}

	getmobileNo(){
		return this.mobNo
	}

	getdate(){
		return this.date
	}
}
module.exports={
    Regex
}
