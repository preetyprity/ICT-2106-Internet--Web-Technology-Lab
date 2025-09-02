// 4 টা image list
let images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg"
];

let currentIndex = 0;
const imgElement = document.getElementById("myImage");

// image toggle on click
imgElement.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex];
});

// button দিয়ে replace করা
document.getElementById("replaceBtn").addEventListener("click", function () {
  // প্রথম image ডিলিট করা
  images.shift();

  // নতুন image যোগ করা (তুমি চাইলে নাম পরিবর্তন করো)
  images.push("images/newImage.jpg");

  // এখন প্রথম image টা দেখানো
  currentIndex = 0;
  imgElement.src = images[currentIndex];
});
