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
  
})
