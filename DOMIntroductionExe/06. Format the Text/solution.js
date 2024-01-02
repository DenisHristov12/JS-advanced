function solve() {
  let text = document.getElementById('input');
  let textValue = text.value;
  let result = document.getElementById('output');

  let paragraphs = textValue.split(".").filter((s) => s !== "").map((s) => s + '.');

  let paragraphRoof = Math.ceil(paragraphs.length / 3);

  for (let i = 0; i < paragraphRoof; i++) {
    let joinedSentences = paragraphs.splice(0, 3).join("");
    result.innerHTML += `<p>${joinedSentences}</p>`;
  }
}