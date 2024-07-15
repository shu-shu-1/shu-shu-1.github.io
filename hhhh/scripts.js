/*
 * @Author: xiaoshu âzs3458222@outlook.com
 * @Date: 2024-07-15 13:31:30
 * @LastEditors: xiaoshu âzs3458222@outlook.com
 * @LastEditTime: 2024-07-15 13:49:19
 * @FilePath: \themed:\code\html\hhhh\scripts.js
 * @Description: 
 * 
 * Copyright (c) 2024 by shu-shu-1 3458222@qq.com, All Rights Reserved. 
 */
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
        
        // Autoplay the video
        mainVideo.play();

        // Request fullscreen
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
