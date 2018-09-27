var sentence = "";
// var letters = [];

$(document).ready( function() {
  $("#WordPlay-form").submit( function(event) {
    event.preventDefault();
    sentence = $("#sentence").val();
    var words = sentence.split(" ");
    console.log(words);
    var newWords = words.map(function(word) {
      if (word.length < 5) {
        letters = word.split('');
        console.log(letters);
        letters.push("a");
        console.log(letters);
        return word = letters.join("");
      } else {
        return word;
      }
    });
    newWord = newWords.reverse().join(" ");
    console.log(newWord);
  });
});
