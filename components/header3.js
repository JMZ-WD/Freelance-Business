class Header extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
  
   <div id="nav2">
    <div>
   
</div>
<div>
   <a class="noactive" href="index.html">Home</a>
   <a class="noactive" href="portfolio.html">Portfolio</a>
   <a class=" active" href="#contact_link">Contact</a>
</div>
</div>

<div class="mobile-header"> 
    <div id="menu2">    
  
      <div class="box box-1">
       
      </div>	
  <div class="box box-3">
     
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
                        <li><a href="index.html">HOME</a>  </li>   
                      <li><a href="portfolio.html">PORTFOLIO</a></li> 
                        <li><a class="menuLink" href="#service_link">Services</a></li> 
                      <li><a class="menuLink" href="#contact_link">Contact</a></li>
                      </ul>
                   
               </nav>
             </div> 
  
    </div>
    </div>


    `;
  }
}

  customElements.define('header-component', Header);
