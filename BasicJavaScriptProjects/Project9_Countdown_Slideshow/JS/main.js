function countdown() {
    let seconds = document.getElementById("seconds").value;
    function tick() {
        seconds--; // 
        let timer = document.getElementById("timer");
        timer.innerHTML = seconds;
        let time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's Up");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}


// set the slide index to start 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// take in the desired slide, get the slide from the html file, 
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length // if the input value was too big, then set the current slide to the last element in the array
    }
    // iterate through the slides while still within the slide array and set them to non -- hiding the slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // iterate through the slides and hide the active from the dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // show the current slide and set the associated dot to active 
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} 