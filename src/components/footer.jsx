import React from "react";
import twit from "/home/ubuntu/Desktop/Travel/public/twitter-x-seeklogo-3.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet,HelmetProvider} from "react-helmet-async";



function Footer(){
    return(
		
      <div>        
            <footer className="footer">
  	 <div className="container ftct">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Page Link</h4>
  	 			<ul>
  	 				<li><a href="/">Home</a></li>
  	 				<li><a href="/explore">Explore</a></li>
  	 				<li><a href="/about">About Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><a href="https://www.google.com">travelsadhu2024@gmail.com</a></li>
  	 				<li><a href="+918100525689">+91 81005 25689</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/profile.php?id=61560767935867&mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fa-brands fa-x-twitter"></i></a>
  	 				<a href="https://www.instagram.com/travel.sadhu/"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  
    </div>    
	
    );
}

export default Footer;