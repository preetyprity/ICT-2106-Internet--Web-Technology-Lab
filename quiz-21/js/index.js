// Ask user for input
let sentence = prompt("Enter a sentence:");

// Convert input to lowercase
let str = sentence.toLowerCase();

// Define vowels
let vowels = "aeiou";
let count = 0;

// Count vowels
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}

// Show output
alert("There are " + count + " vowels in the sentence.");
console.log("There are " + count + " vowels in the sentence.");
document.writeln("</br>There are " + count + " vowels in the sentence.")
