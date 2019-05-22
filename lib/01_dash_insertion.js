///Juan solution

function insertDash(word) {
  // TODO: implement the method and return word with dashes
const vowels = ['a', 'e', 'i', 'o', 'u' ]
const word = [""]
word.map(forEach => if(word.includes(vowels)) {
  word.split("/ ");
});
  return null;
}
}

module.exports = insertDash;




///reddit
//let newString = theWord[0]
//const vowels = ['a', 'e', 'i', 'o', 'u']
//for (let i = 1; i <= theWord.length; i++) {
  //  if (!vowels.includes(theWord[i]) (
    //     newWord = newWord.concat('-')
     //)
     //newWord = newWord.concat(theWord[i])
//}

//Juan solution

function insertDash(word) {
  const consonants = ['a','e', 'i', 'o', 'u']
    if(word.includes ? :consonants) {
      newWord = newWord.concat('-')

}

}


//lewagon solution


function isConsonant(letter) {
  return !letter.match(/[aeiouy\s]/i);
}

function insertDash(word) {
  if (!word || word.length === 0) {
    return "";
  }
  return word.split("").map((letter, i, letters) => {
    if (i > 0 && isConsonant(letters[i - 1]) && isConsonant(letter)) {
      return `-${letter}`;
    }
    return letter;
  }).join("");
}

module.exports = insertDash;
