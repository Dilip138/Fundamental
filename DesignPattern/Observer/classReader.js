class reader {
    constructor(name) {
        this.name = name;
        this.subjects = null;
    }
    addSubject(newSubject) {
        if (this.subjects == null) this.subjects = new Array();
        this.subjects.push(newSubject);
    }
    informed() {
        console.log(this.name + " says they were informed\n");
    }
}
module.exports = reader