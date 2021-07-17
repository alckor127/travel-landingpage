const video = document.getElementById("video"),
  videoButton = document.getElementById("video-button"),
  videoIcon = document.getElementById("video-icon");

const payPause = () => {
  if (video.paused) {
    // Play video
    video.play();
    // We chage the icon
    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {
    // Pause video
    video.pause();
    // We chage the icon
    videoIcon.classList.add("ri-play-line");
    videoIcon.classList.remove("ri-pause-line");
  }
};

const videoEnd = () => {
  // Video ends, icon change
  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
};

videoButton.addEventListener("click", payPause);

video.addEventListener("ended", videoEnd);
