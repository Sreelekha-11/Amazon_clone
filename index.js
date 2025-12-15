let currentIndex = 0;
const slidesInner = document.querySelector('.slides-inner');
const totalSlides = document.querySelectorAll('.slides-inner img').length;

function showSlide(index) {
    slidesInner.style.transform = `translateX(-${index * 100}%)`;
}

function next() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}


setInterval(next, 2500);

function right() {
    document.getElementById("btoys").scrollBy({
        left: 300,
        behavior: "smooth"
    })
}
function left() {
    document.getElementById("btoys").scrollBy({
        left: -300,
        behavior: "smooth"
    })
}

function sideright() {
    document.getElementById("electronic").scrollBy({
        left: 300,
        behavior: "smooth"
    })
}
function sideleft() {
    document.getElementById("electronic").scrollBy({
        left: -300,
        behavior: "smooth"
    })
}
function sideright1() {
    document.getElementById("kitchen").scrollBy({
        left: 300,
        behavior: "smooth"
    })
}
function sideleft1() {
    document.getElementById("kitchen").scrollBy({
        left: -300,
        behavior: "smooth"
    })
}
function sideright2() {
    document.getElementById("furnituree").scrollBy({
        left: 300,
        behavior: "smooth"
    })
}
function sideleft2() {
    document.getElementById("furnituree").scrollBy({
        left: -300,
        behavior: "smooth"
    })
}