function Student(first, last, status) {
    this.first = first;
    this.last = last;
    this.status = status;
    this.say = () => {
        console.log(
            "name: " + this.first + " " + this.last + ", status: " + this.status
        );
    };
}
function StudentPrototype(proto) {
    this.proto = proto;
    this.clone = function () {
        let customer = new Student();
        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;
        return customer;
    };
}
module.exports = {
    Student, StudentPrototype
}