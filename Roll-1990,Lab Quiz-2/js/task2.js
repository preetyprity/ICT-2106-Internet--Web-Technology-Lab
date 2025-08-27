const images = [
  'image/b1.jpg',
  'image/b2.png',
  'image/b3.png',
  'image/b4.jpeg',
  
];

let currentIndex = 0;


function showImage(index) {
  const img = document.getElementById('slideImage');
  img.src = images[index];
}


function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}


function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}


function AddImage(){

 currentIndex = (currentIndex - 2 + images.length) % images.length;
  showImage(currentIndex);

}