var DataConverter = require('../src/models/data_converter.js')
var assert = require('assert')

describe('data converter', function () {
  beforeEach(function () {
    converter = new DataConverter()
  });

  it('should convert words into one string', function(){
    assert.strictEqual(converter.wordsToSingleString(["one two","three","one"]), "one two,three,one",  );
  });

  it('should convert a string into an array', function(){
    const result = converter.stringToArray("one,two,three,one");
    console.log("result",result);
    assert.deepStrictEqual(result, [ 'one', 'two', 'three', 'one' ]);
  });


  it('should convert an array into an associated list object', function(){
      const result = converter.arrayToHash([ 'one', 'two', 'three', 'one' ])
      console.log("result",result);
      assert.deepStrictEqual(result,  { one: 2, two: 1, three: 1 });
  });


  it('should create input for table from input words', function(){
    const result = converter.hashToArrayforTable({ one: 2, two: 1, three: 1 });
    assert.deepStrictEqual(result,  [{ one: 2}, {two: 1}, {three: 1}]);
  });




});
