const countDOM = document.getElementById("count");
const form = document.getElementById("form");
const inputText = document.getElementById("inputText");

function countVowels(e) {
  e.preventDefault();
  let text = String(inputText.value);
  if (text != "") {
    let count = text.match(/[aeiou]/gi);
    if (count == null) {
      countDOM.innerHTML = "No vowels!";
    } else {
        let count = text.match(/[aeiou]/gi).length;
      countDOM.innerHTML = count;
    }
  } else {
    alert("Please, enter some text!");
  }
}

form.addEventListener("submit", countVowels);
