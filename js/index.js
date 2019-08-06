
//mouse over nav items and they change color to red
const mouseOver = document.querySelector('nav');

mouseOver.addEventListener(
    "mouseover",
    function(event) {
      event.target.style.color = "red";
      setTimeout(function() {
        event.target.style.color = "";
      }, 250);
    },
    false
  );

  //keypress make the entire page disappear
const gone = document.querySelector("body");
gone.addEventListener("keydown", () => (gone.style.opacity = "0"));

//moving mouse makes text come back
const back = document.querySelector("body");
back.addEventListener("mouseenter", () => (back.style.opacity = "1"));