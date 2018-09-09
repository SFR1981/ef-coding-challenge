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



module.exports = DataConverter;
