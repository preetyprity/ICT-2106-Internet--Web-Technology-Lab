function buttonClick1() {
    alert('Hello');
}

function paraClick() {
    var text = document.getElementById('paraId');
    text.innerHTML = 'This is the second text of the paragraph.';
}
function ImageClick() {
    var text = document.querySelector('#imageId');
text.src='images/image.jpg';

    
}


// Array of image paths
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

let currentIndex = 0;

function showNextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Loop back to first image
    }
    updateImage();
}

function showPreviousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop to last image
    }
    updateImage();
}

function updateImage() {
    const img = document.getElementById('imageId');
    img.src = images[currentIndex];
}

// Optional: paraClick and ImageClick remain as you had them
function paraClick() {
    var text = document.getElementById('paraId');
    text.innerHTML = 'This is the second text of the paragraph.';
}
