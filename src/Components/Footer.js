import React from 'react'
import facebook from './images/fa-icon.png'
import ig from './images/instagram-icon.png'
import li from './images/linkedin-ICON.png'
import tw from './images/twitter-ICON.png'
import './css/Footer.css'
import emailjs from 'emailjs-com';
function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_8o11so6', 'template_q02fa5f', e.target, 'user_L5WbOZGv8Ai94tr8CIHVj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

      let popup=document.getElementsByClassName('popup');
      console.log(popup);
      for(let i=0;i<popup.length;i++)
      {
          popup[i].style.display='block';
        }
        
         
  }
  function closepop(){
    let popup=document.getElementsByClassName('popup');
    for(let i=0;i<popup.length;i++)
    {
        popup[i].style.display='none';
      }
}

const Footer = () => {
    return (
        <div>
             <footer>
        <div class="footer-subscribe" >
            <div class="subscribe-text">
            <h1>Subscribe to our Newsletter</h1>
        </div>
        <form onSubmit={sendEmail}>
            <input type="mail" placeholder="Enter email" autoComplete="off" name="email"/> 
            <input type="submit" id="footer-bt" />

            </form>
        </div>
        <div className="footer-container"  data-aos="slide-left">
            <div className="contact">
                <h1 className="stay"> Covid 19 Dashboard </h1>
                <h1 className="stay2">
                    A Project <br/>
                task for  <br/>
                    Flippr <br/>
                    Pune
                </h1>
            </div>

            <div className="menu">
                <h1 className="stay">Menu</h1>

                <a href="">Home </a>
                <a href="/contact">Contact and Headline</a>
                <a href="/notifications">Notifications</a>
                <a href="/beds">State Bed Count</a>
            </div>
            <div className="social">
                <h1 id="move-left" class="stay">Connect with Us</h1>
                <div class="Icons">
                    <div class="top-row">
                        <a href="https://www.facebook.com/thechaitanyagalande/"><img src={facebook} alt="" /></a>
                        <a href="https://www.instagram.com/mi_ahe_chaitanya/"><img src={ig} alt="" /></a>
                    </div>
                    <div className="bottom-row">
                        <a href="https://twitter.com/mi_ahe_chaitany"><img src={tw} alt=""/></a>
                        <a href="https://www.linkedin.com/in/chaitanya-galande-96a491134/"><img src={li} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="popup container">
        <h2 className="text-align"> Thank you for contacting ! <br/> We've sent you an mail regarding this</h2>
        <button className="popc" onClick={closepop} > X </button>
    </div>
  
<p style={{textAlign:"center"}}>Design and coded by  <a href="https://www.linkedin.com/in/chaitanya-galande-96a491134/" class="credits"> Chaitanya Galande</a></p>
    </footer>
        </div>
    )
}

export default Footer
 
