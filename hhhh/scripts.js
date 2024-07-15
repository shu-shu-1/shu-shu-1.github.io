document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("imageContainer");
    const mainImage = document.getElementById("mainImage");
    const mainVideo = document.getElementById("mainVideo");

    // After 3 seconds, fade out the image
    setTimeout(() => {
        imageContainer.classList.add("fade-out");
    }, 3000);

    // After 5 seconds (time for fade-out animation), show the video and request fullscreen
    setTimeout(() => {
        imageContainer.style.display = "none";
        mainVideo.style.display = "block";
        mainVideo.play();

        if (mainVideo.requestFullscreen) {
            mainVideo.requestFullscreen();
        } else if (mainVideo.mozRequestFullScreen) { // Firefox
            mainVideo.mozRequestFullScreen();
        } else if (mainVideo.webkitRequestFullscreen) { // Chrome, Safari and Opera
            mainVideo.webkitRequestFullscreen();
        } else if (mainVideo.msRequestFullscreen) { // IE/Edge
            mainVideo.msRequestFullscreen();
        }
    }, 5000);
});
