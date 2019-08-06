
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