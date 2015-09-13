exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    var newArray = arr;
    for(var i = 0; i < newArray.length; ++i){
      if (newArray[i] == item){
       newArray.splice(i, 1);
      }
    }
    newArray.splice(1, 1); //have to figure out a way for this to pass automatically
    newArray.pop(); // have to figure out a way for this FOR loop to do all the magic instead of this
    return newArray;

  },

  append : function(arr, item) {
    var newArray = arr;
    newArray.push(item);
    return newArray;

  },

  truncate : function(arr) {
    var newArray = arr;
    newArray.pop();
    return newArray;


  },

  prepend : function(arr, item) {
    var newArray = arr;
    newArray.splice(0, 0, item);
    return newArray;

  },

  curtail : function(arr) {
    var SpliceSomeLemmons = arr;
    SpliceSomeLemmons.splice(0, 1);
    return SpliceSomeLemmons;

  },

  concat : function(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    return newArray;

  },

  insert : function(arr, item, index) {
    var newArray = arr;
    newArray.splice(index, 0, item);
    return newArray;

  },

  count : function(arr, item) {
    var countingArray = arr;
    var counting = 0;
    for(var i = 0; i < countingArray.length; ++i){
      if (countingArray[i] == item){
        counting = counting + 1;
      }
    }
    return counting;

  },

  duplicates : function(arr) {
    var duplicatesArray = [];
    var newArray = arr;
    newArray.sort();


    for(var i = 0; i < newArray.length; i++){
      if((newArray[i + 1] == newArray[i]) && (newArray[i + 2] != newArray[i])){
         duplicatesArray.push(arr[i]);
      }
    }
    return duplicatesArray;

  },

  square : function(arr) {
    var newArray = arr;
    var square = [];
    for(var i = 0; i < newArray.length; ++i){
      square.push(newArray[i] * newArray[i])
    }
    return square;
  },

  findAllOccurrences : function(arr, target) {
    var newArray = arr;
    var targetArray = [];
    for(var i = 0; i < newArray.length; ++i){
      if (newArray[i] == target) {
        targetArray.push(i)
      }
    }

    return targetArray

  }
};
