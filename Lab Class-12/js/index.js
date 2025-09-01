function buttonClick1() {
    alert('Hello');
}

function paraClick() {
    var text = document.getElementById('paraId');
    text.innerHTML = 'This is the second text of the paragraph.';
}

function ImageClick() {
    var img = document.getElementById('imageId');
    img.src = 'images/pic.jpeg';   // তোমার প্রকৃত image path দিতে হবে
}
