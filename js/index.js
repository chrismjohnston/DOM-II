
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

  //drag the bus photo and it gets bigger by 125%
const busPhoto = document.querySelector(".intro img");
busPhoto.addEventListener(
  "drag",
  e => (e.target.style.transform = "scale(1.25)")
);

//moving mouse over destination titles turns them green
const destinationTitle = document.querySelectorAll(".destination h4");

destinationTitle.forEach(node => {
    node.addEventListener("mousemove", function(event) {
      event.target.style.color = "green";
      250;
      event.stopPropagation();
      setTimeout(function() {
        event.target.style.color = "";
      }, 250);
    },
    false
    ) ;
})

document.getElementsByClassName("nav-link").addEventListener("click", function(event){
    event.preventDefault();
   handleFireButton();
});