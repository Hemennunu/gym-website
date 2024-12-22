let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
//Typing Text Code
const typed = new Typed(".multiple-text", {
  strings: [
    "ለአካልብቃት",
    "ክብደት ለመጨመር",
    "ለአካልጥንካሬ",
    "ውፍረት ለመቀነስ",
    "ክብደት ለማንሳት",
    "ለጥሩ አቋም",
    "ዳይኖሶር ጂምን ይምረጡ!",
  ],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});
// Function to set the active link on page load
function setActiveLink() {
  // Get all navigation links
  const links = document.querySelectorAll(".navbar li a");

  // Loop through links and check the current location
  links.forEach((link) => {
    if (link.getAttribute("href") === window.location.hash) {
      link.classList.add("active"); // Add active class if it matches
    }
  });

  // Observe scroll to change active class dynamically
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    // Get current section
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    // Remove active class from all links and add to the current link
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", setActiveLink);
