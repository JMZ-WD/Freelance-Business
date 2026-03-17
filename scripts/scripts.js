
function toggleMenu() {
  const menu = document.getElementById('menu');
  const hamburger = document.getElementById('hamburger');
  
  // Toggle the 'show' class to apply the fade-in effect
  menu.classList.toggle('show');
  
  // Toggle the hamburger icon to a cross
  hamburger.classList.toggle('open');
}



document.addEventListener('DOMContentLoaded', function() {
  const stages = document.querySelectorAll('.stage');
  const contents = document.querySelectorAll('.content');

  // Show default content (stage 1) on load
  showContent('content-1');
  setActiveStage('stage-1');  // Set default active stage

  stages.forEach(stage => {
    stage.addEventListener('click', function() {
      const stageClass = this.classList[1];  // Get the second class (e.g., "stage-1")
      showContent('content-' + stageClass.split('-')[1]);
      setActiveStage(stageClass);
    });
  });

  // Function to show content based on the clicked stage
  function showContent(contentClass) {
    // Hide all content
    contents.forEach(content => {
      content.classList.remove('active');
    });

    // Show the content of the selected stage
    const activeContent = document.querySelector(`.${contentClass}`);
    if (activeContent) {
      activeContent.classList.add('active');
    }
  }

  // Function to set the active stage and update colors
  function setActiveStage(activeStageClass) {
    stages.forEach(stage => {
      if (stage.classList.contains(activeStageClass)) {
        stage.classList.add('active');
        stage.classList.remove('inactive');
      } else {
        stage.classList.remove('active');
        stage.classList.add('inactive');
      }
    });
  }
});


  // Select elements for the first set of classes
  const phoneContainers1 = document.querySelectorAll('.phone-container');
  const phoneImages1 = document.querySelectorAll('.phone-image');
  
  // Select elements for the second set of classes
  const phoneContainers2 = document.querySelectorAll('.phone-container2');
  const phoneImages2 = document.querySelectorAll('.phone-image2');
  
  let isAutoScrolling1 = []; // Track auto-scrolling state for each container (first set)
  let isAutoScrolling2 = []; // Track auto-scrolling state for each container (second set)
  let scrollDirection = 1; // 1 for down, -1 for up

  // Function to start the auto-scroll loop for each container
  function startAutoScroll(phoneContainer, phoneImage, index, isAutoScrollingArray) {
    if (isAutoScrollingArray[index]) return; // Prevent starting multiple intervals for the same container

    isAutoScrollingArray[index] = true;

    const scrollInterval = setInterval(() => {
      if (phoneContainer.scrollTop + phoneContainer.clientHeight >= phoneImage.scrollHeight) {
        // If at the bottom, reset and scroll back to top
        phoneContainer.scrollTop = phoneImage.scrollHeight; // Scroll to the bottom
        setTimeout(() => {
          phoneContainer.scrollTop = 0; // Quickly scroll back to the top
        }, 100); // Short delay before bouncing back
      } else {
        phoneContainer.scrollTop += scrollDirection; // Scroll down
      }
    }, 20); // Adjust the speed of scrolling by modifying this value
  }

  // Function to check if the container is in the viewport
  function checkIfInView() {
    // Handle the first set of phone containers and images
    phoneContainers1.forEach((phoneContainer, index) => {
      const rect = phoneContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        setTimeout(() => {
          startAutoScroll(phoneContainer, phoneImages1[index], index, isAutoScrolling1); // Start auto-scroll for the first set
        }, 800); // Start auto-scroll after 800ms delay
      }
    });

    // Handle the second set of phone containers and images
    phoneContainers2.forEach((phoneContainer, index) => {
      const rect = phoneContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        setTimeout(() => {
          startAutoScroll(phoneContainer, phoneImages2[index], index, isAutoScrolling2); // Start auto-scroll for the second set
        }, 800); // Start auto-scroll after 800ms delay
      }
    });
  }

  // Add event listener to check if any container is in view when scrolling
  window.addEventListener('scroll', checkIfInView);

  // Initial check if any container is in view when the page loads
  checkIfInView();

document.addEventListener('DOMContentLoaded', function () {
  // Set "Meet" as the active stage on page load
  showStage(1);
});

function showStage(stageNumber) {
  // Hide all stages and images
  for (let i = 1; i <= 4; i++) {
    document.getElementById('stage' + i + '_content').style.display = 'none';
    document.getElementById('stage' + i + '_img').style.display = 'none';
    // Remove active class from all stage buttons
    let stageElement = document.querySelector('.stage3:nth-child(' + i + ')');
    if (stageElement) {
      stageElement.classList.remove('active');
    }
  }

  // Show the selected stage's content and image
  document.getElementById('stage' + stageNumber + '_content').style.display = 'block';
  document.getElementById('stage' + stageNumber + '_img').style.display = 'block';
  
  // Add active class to the clicked stage
  let activeStage = document.querySelector('.stage3:nth-child(' + stageNumber + ')');
  if (activeStage) {
    activeStage.classList.add('active');
  }
}



// Create a single Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'visible' class when the element is in view
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing after it's in view
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the h2 element is in view
});

// Select all h2 elements within the desired sections
const headings = document.querySelectorAll('.services2 h2, .services h2, .projects h2, .process2 h2, .process h2');

// Observe each heading
headings.forEach(heading => {
  observer.observe(heading);
});







window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.large_nav');
    if (window.scrollY > 0) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
});




  // Function to close the menu when a link is clicked
  function closeMenuOnLinkClick() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    
    // Close the menu and reset the hamburger icon to default state
    menu.classList.remove('show');
    hamburger.classList.remove('open');
  }
  
  // Add event listeners to all the links in the menu to close the menu when clicked
  const menuLinks = document.querySelectorAll('.menu-content ul li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenuOnLinkClick);
  });
  
  







// Select the logo element
const logo = document.getElementById('logo');

// Listen for scroll events
window.addEventListener('scroll', function() {
  // Check if the page has been scrolled down
  if (window.scrollY > 0) {  // Change '50' to the scroll distance you want
    logo.src = 'img/logojmz.png'; // Change logo to logobk.jpg when scrolling down
  } else {
    logo.src = 'img/logobk.png'; // Revert to original logo when at top of the page
  }
});



