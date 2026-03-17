class Header extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
  
   <div id="nav">
    <div>
  <p class="company">JMZ Web Designs</p>
</div>
<div>

   <a class="active" href="index.html">Home</a>
   <a class="noactive" href="portfolio.html">Portfolio</a>
   <a class="noactive" href="#contact_link2">Contact</a>
</div>
</div>

<div class="mobile-header"> 
    <div id="menu2">    
  
      <div class="box box-1m">
    <p class="company2">JMZ Web Designs</p>
      </div>	

          <div class="box box-2">	
            <input type="checkbox" id="nav-menu1">
            <label class="ham" id="nav-icon1" for="nav-menu1">
                          <span></span>
                          <span></span>
                          <span></span>
                          </label>     
                    <nav class="navbarx">
                      <ul>
                        <li><a href="index.html">Home</a>  </li>   
                      <li><a href="portfolio.html">Portfolio</a></li> 
                        <li><a class="menuLink" href="#service_link">Services</a></li> 
                      <li><a class="menuLink" href="#contact_link">Contact</a></li>
                      <li></li>
                      <li><div class="solist"> 
                        <a class="phone" href="tel:+447504700776">  <img class="phneIcon" src="IMG/phone.jpg" alt="icon telephone"></a>
<a class="phone" href = "mailto: jmz-webdesigns@hotmail.com">  <img class="emaIcon" src="IMG/ema23.jpg" alt="icon email"></a>



                  


     <a class="phone" href="https://www.facebook.com/profile.php?id=61557056617583&locale=en_GB"> <img class="emaIcon" src="IMG/FB21.png" alt="fb icon"> &nbsp;</a>
     <a class="phone" href=" https://www.instagram.com/jmzwebdev/"> <img class="emaIcon" src="IMG/INS21.png" alt="fb icon"></a>
     </div></li>
                      </ul>
                   
               </nav>
             </div> 
  
    </div>
    </div>


    `;
  }
}

  customElements.define('header-component', Header);