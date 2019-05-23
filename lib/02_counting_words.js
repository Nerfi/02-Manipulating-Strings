//Juan solution

// I dont think im gonna need this piece of code(function)
function matchWord(word) {
  return !word.match(text);

}


//juan 23/5/19 solution
 const word = [""]

 let number = 0

 function endText(text) {
  text.split("").map((word) => {
      if (text).includes(word) {

         number +1
      } return number
  });
}



// 22/5/19
function solutionText(text) {
  return text.map(text, text => {

  })
}


let number = 0

function occurrences(text, word) {
  if (text).includes(word) {
  number + 1

}  return null;

}

module.exports = occurrences;



//lewagon solution

function ocurrences(text, word) {
  if(!text  || text.length === 0) {
    return 0
  }
  // dont understand why we created 'reducer' const
  const reducer = (count, term) => count + (term.toLowerCase() === word.toLowerCase() ? 1 : 0 );
  return text.split("").reduce(reducer, 0);
}

module.exports = occurrences;
