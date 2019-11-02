/* 
*  @Purpose         :Unit testing with mocha chai and callback function
* 
*  @file           : ControllerSpec.js
*  @module         :  - isValidUserId,isValidUserIdAsyn
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 15-10-2019

*/

let assert = require('assert');
let loginController =  require('../module/Controller');

describe('LoginController', function () {

  describe('isValidUserId', function(){

    it('should return true if valid user id', function(){
      let isValid = loginController.isValidUserId(['abc123','xyz321'], 'abc123')
      assert.equal(isValid, true);
    });

    it('should return false if invalid user id', function(){
      let isValid = loginController.isValidUserId(['abc123','xyz321'],'abc1234')
      assert.equal(isValid, false);
    });

  });

  describe('isValidUserIdAsync', function(){

    it('should return true if valid user id', function(done){
      loginController.isValidUserIdAsync(['abc123','xyz321'], 'abc123',
      function(isValid){
          assert.equal(isValid, true);
          done();
      });
    });

  });

});