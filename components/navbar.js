var navbarx = document.querySelector(".navbarx");
var ham = document.querySelector(".ham");
var checkbox = document.getElementById("nav-menu1");

ham.addEventListener("click", toggleHamburger);

// Function to toggle the hamburger menu visibility
function toggleHamburger() {


  // Toggle the visibility of the navbar menu
  navbarx.classList.toggle("showNav");
}

// Select all the links in the mobile menu
var menuLinks = document.querySelectorAll("a[href^='#']");  // Select links with href starting with '#'

menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener("click", function(event) {
    // Close the menu by unchecking the checkbox
    checkbox.checked = false; // Uncheck the checkbox to close the menu and reset the hamburger icon
    navbarx.classList.remove("showNav"); // Remove the 'showNav' class to hide the menu

    // Let the browser handle the navigation to the section
    const target = document.querySelector(menuLink.getAttribute('href'));
    if (target) {
      // Optionally focus on the target element (without scrolling)
      target.focus();
    }
  });
});