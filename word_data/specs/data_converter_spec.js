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

  



});
