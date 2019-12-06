const assert = require('assert')
/**
 * @purpose:TDD-Designing and Developing tests for password length functionality of a program
 */
class Passwordvalidator {
    constructor() {
        this.password = this.password

    }
    isvalid(password) {
        if (password.length >= 5 && password.length <= 10) {
            return true
        }
        else
            return false
    }
}
let passwordValidator = new Passwordvalidator()
assert.equal("true", passwordValidator.isvalid("abc123"));
assert.equal("true", passwordValidator.isvalid("abc")); 
