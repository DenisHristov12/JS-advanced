function solve() {
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";

  let inputValue = document.getElementById('text').value.toLowerCase();
  let currentCase = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if(currentCase !== CAMEL_CASE && currentCase !== PASCAL_CASE){
    result.textContent = "Error!";
    return;
  }

  let arrOfStr = inputValue.split(" ");
  let output = "";
  let startingPoint = 0;

  if(currentCase === CAMEL_CASE){
    output += arrOfStr[0];
    startingPoint = 1;
  }


  for (let i = startingPoint; i < arrOfStr.length; i++) {
    let currentWord = arrOfStr[i];
    output += currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);

    result.textContent = output;
  }
}