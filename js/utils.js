// @ts-nocheck
const hamburgerModal = document.getElementById("myModal");
const hamburgerButton = document.getElementById("hamburger-menu");
const closeHambugerButton = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
hamburgerButton.onclick = () => {
  hamburgerModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeHambugerButton.onclick = () => {
  hamburgerModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (
    event.target == hamburgerModal ||
    event.target.getAttribute("class") == "hamburger-menu-link"
  ) {
    hamburgerModal.style.display = "none";
  }
};
