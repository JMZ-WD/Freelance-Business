class Footer extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    
    <div class="footer">

<div class="footFlex">


<h3>CONTACT</h3>
<p>James Kelly </p>
<p>24 Milton Rd<br> Edinburgh<br> EH15 2PQ</p><br>
<a class="phone" href="tel:+44795746710"> 0131 669 4400</a><br>
<a class="phone" href = "mailto: office@bkb.com">ec2133641@edinburghcollege.ac.uk</a><br><br>
<a target="_blank" class="policy" href="ppolicy.html">Privacy Policy</a>
</div>




    <div class="copy">	<p> &#169; JMZ Web Designs 2023 </p>
   

</div>

</div>
    `;
  }
}

  customElements.define('footer-component', Footer);