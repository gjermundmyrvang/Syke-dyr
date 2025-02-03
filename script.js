

document.querySelectorAll("path").forEach(e => {
    if (e.getAttribute("name")) {
      e.addEventListener("mouseover", function() {

        document.getElementById("name").style.opacity = 1;
        document.getElementById("namep").innerText = e.id;

        document.addEventListener("mousemove", function(j) {
    
          x = j.clientX;
          y = j.clientY;
  
          document.getElementById("name").style.top = y - 20 + "px";
          document.getElementById("name").style.left = x - 20 + "px";
        });

      });
  
      e.addEventListener("mouseout", function() {
        document.getElementById("name").style.opacity = 0;
      });
    }

  });


  function toggleSound() {
    var audio = document.getElementById("soundtrack");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }