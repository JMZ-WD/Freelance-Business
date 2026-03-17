class Footer extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    
    <div class="footer">

<div class="footFlex">

<div>

<h3>CONTACT</h3>
<img class="phneIcon" src="IMG/telep.png" alt="icon telephone"><a class="phone" href="tel:+44795746710"> 07504700776</a><br>
<img class="emaIcon" src="IMG/email2.png" alt="icon email"><a class="phone" href = "mailto: office@bkb.com">ec2133641@edinburghcollege.ac.uk</a><br><br>


</div>


    <div class="copy">	<p> &#169; JMZ Web Designs 2024 </p>
   

</div>

<div>
<h3>FOLLOW</h3>
<h2 class="contactHead3">Follow</h2>
  <div class="social_flex">
    
     <a class="phone" href="https://www.facebook.com/profile.php?id=61557056617583&locale=en_GB"> <img class="emaIcon" src="IMG/FB2.png" alt="fb icon"></a>
     <a class="phone" href=" https://www.instagram.com/jmzwebdev/"> <img class="emaIcon" src="IMG/INS2.png" alt="fb icon"></a>

     </div>

</div>
    `;
  }
}

  customElements.define('footer-component', Footer);