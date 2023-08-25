const toggleButton = document.querySelector('.mediumToggel');
const toggleBox = document.querySelector('.toggleBox');
const triangle = document.querySelector('.bi-caret-down-fill');

toggleButton.addEventListener('click', () => {
    triangle.classList.toggle('bi-caret-up-fill');
    toggleBox.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector(".vid1");
    const playButton = document.querySelector(".play-button");

    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);

    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector(".vid2");
    const playButton = document.querySelector(".play-button2");

    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});