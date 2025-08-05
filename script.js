    const modal = document.getElementById("videoModal");
    const trigger = document.querySelector(".pp");
    const closeBtn = document.querySelector(".close");
    const video = document.getElementById("myVideo");

    trigger.onclick = function() {
      modal.style.display = "flex";
      video.play();
    }

    closeBtn.onclick = function() {
      modal.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }

    window.onclick = function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
      }
    }
