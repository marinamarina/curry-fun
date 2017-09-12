var assert = require('assert')
var expect = require('chai').expect
var makeCurry = require('./curry')

describe('Curry function generator', function() {
  it('should transform any function into a curried function', function() {
     var add = function(){}
     expect(makeCurry(add)).to.be.a('function')
  });

  it('should throw an error if there is no function provided as an argument', function() {
    expect(function(){makeCurry()}).to.throw(Error)
 });
});

describe('Curry function', function() {
  var add;

  beforeEach(function() {
    add = function(a,b,c) {
      return a+b+c
    }
  })

  it('should return a proper result when called with original number of args', function() {
     var curriedAdd = makeCurry(add)
     expect(curriedAdd(1,6,3)).to.equal(10)
  })

  it('should return a function when called with number of args less than original', function() {
    var curriedAdd = makeCurry(add)
    expect(curriedAdd(1,6)).to.be.a('function')
 })

})
