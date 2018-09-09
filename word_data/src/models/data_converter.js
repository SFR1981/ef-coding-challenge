const DataConverter = function () {
}

DataConverter.prototype.wordsToSingleString = function (words) {
  // Take all words and make them one string, and all lower case
   const singleString = words.join().toLowerCase()
   console.log(singleString);
  return singleString;
  }

 // take the string and split by anything other than an alphanumeric character
DataConverter.prototype.stringToArray = function (string) {
  const allWordsAsArray = string.split(/\W+/)
  return allWordsAsArray
};


// make object of words linked to counts within string
DataConverter.prototype.arrayToHash = function (array) {
  var wordsAgainstCount = {}
  var keys = []
  array.forEach((word) => {
    if (wordsAgainstCount[word] === undefined){
      keys.push(word)// using?
      wordsAgainstCount[word] = 1;
    } else {
      wordsAgainstCount[word] = wordsAgainstCount[word] + 1;
    }
  })
  return wordsAgainstCount;
};

// create array of key value pairs to use in creating the table display
DataConverter.prototype.hashToArrayforTable = function (hash) {
    var arrayOfHashes = []
    for(var word in hash) {
        var array = {}
        array[word] = hash[word]
      arrayOfHashes.push(array)
      }
      return arrayOfHashes;
}


module.exports = DataConverter;
