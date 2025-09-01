var para = document.querySelector('#paraId');

// Add/Remove style with toggle
var addButton = document.querySelector('#addstyle');
var removeButton = document.querySelector('#removestyle');
if(addButton){
  addButton.addEventListener("click", function () {
    para.classList.toggle("para-style");
  });
}
if(removeButton){
  removeButton.addEventListener("click", function () {
    para.classList.remove("para-style");
  });
}

// Random Color
var randomBtn = document.querySelector('#randomcolor');
if(randomBtn){
  randomBtn.addEventListener("click", function () {
    var colors = ["red", "blue", "green", "purple", "orange", "brown"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    para.style.color = randomColor;
  });
}

// Increase / Decrease Font
var increaseBtn = document.querySelector('#increase');
var decreaseBtn = document.querySelector('#decrease');
var currentSize = 16;

if(increaseBtn){
  increaseBtn.addEventListener("click", function () {
    currentSize += 2;
    para.style.fontSize = currentSize + "px";
  });
}
if(decreaseBtn){
  decreaseBtn.addEventListener("click", function () {
    if (currentSize > 8) {
      currentSize -= 2;
      para.style.fontSize = currentSize + "px";
    }
  });
}

// Change Text
var changeBtn = document.querySelector('#changetext');
if(changeBtn){
  changeBtn.addEventListener("click", function () {
    para.innerHTML = "This is the new text content!";
  });
}

// Dark/Light Mode
var modeBtn = document.querySelector('#mode');
if(modeBtn){
  modeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}

// Navigation funActions
function next() {
  location.href = "templates/next.html"; // তোমার ফোল্ডার structure অনুযায়ী ঠিক করো
}

function Previous() {
  location.href = "../index.html";
}
