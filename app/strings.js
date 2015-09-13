exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var count = 1;
    var result = "";
    for (var i = 0; i < str.length; i++){
      if (str[i] === str[i-1]){
        count += 1
      } else {
        count = 1
      }
      if (count <= amount){
        result += str[i]
      }
    }

  },
  wordWrap: function(str, cols) {
      var count = 0;
      var words = str.split(" ");
      var result = [];
      for(var i = 0; i < words.length; i++) {
        count += words[i].length;
        result.push(words[i]);
        var nextWord = words[i + 1];
        if (nextWord) {
          var nextWordCharacters = nextWord.length;
          if (count + nextWordCharacters < cols){
            result.push(" ");
            count += 1;
          } else {
            result.push("\n");
            count = 0;
          }
        }
      }
      return result.join("")
  },
  reverseString: function(str) {
    var stringToReverse = str;
    var arrayOfLetters = stringToReverse.split("");
    arrayOfLetters.reverse();
    var finalString = arrayOfLetters.join("");
    return finalString;
    // arrayOfLetters.


  }
};
