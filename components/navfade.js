window.onscroll = function() {opacity()};



function opacity() {
    if (scrollY > 0) {
    document.getElementById("nav").style.backgroundColor = "rgba(14, 205, 233, 0.9)"; 
    document.getElementById("nav").style.boxShadow = " 1px 3px 3px rgba(0, 44, 39)";  
    document.getElementById("nav").style.textShadow = "0px 0px ";
    var element = document.getElementById("nav");
    element.classList.add("navMove");
    element.classList.remove("navMove2");
  
    
    }

    else {
    document.getElementById("nav").style.backgroundColor = "rgba(1, 78, 74, 0)";
    document.getElementById("nav").style.boxShadow = " none"; 
    document.getElementById("nav").style.textShadow = "4px 4px black ";
    var element = document.getElementById("nav");
    element.classList.add("navMove2");
    element.classList.remove("navMove");
   
    
    
    }
}


