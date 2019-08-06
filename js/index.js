
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

//double click on signup button and you get an alert have your credit card number ready
const signupButton = document.querySelectorAll(".btn");

signupButton.forEach(node => {
  node.addEventListener("dblclick", function() {
    alert(`have your CC number ready`);
  });
});

//on event load it says your page is loaded and comes to the unscientific conclusion that Google thinks it is fast.
window.addEventListener("load", function() {
    alert("Your page has loaded and Google says your page speed is fast");
  });