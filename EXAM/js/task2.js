function countVowels() {
  let sentence = document.getElementById("sentence").value;

  let str = sentence.toLowerCase();
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  // show answer in colored text
  let result = document.getElementById("result");
  result.innerHTML = "There are <span class='highlight'>" + count + "</span> vowels in the sentence.";
}
