import React from "react";
import twit from "/home/ubuntu/Desktop/Travel/public/twitter-x-seeklogo-3.svg";
import logo from "/home/ubuntu/Desktop/Travel/public/Logo.png";
import shakyo from "/home/ubuntu/Desktop/Travel/public/shakyo.png";
import soumodeep from "/home/ubuntu/Desktop/Travel/public/soumodeep.png";
import sreyangshu from "/home/ubuntu/Desktop/Travel/public/sreyangshu.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet, HelmetProvider} from "react-helmet-async";



function About(){
    return(
        <div class="responsive-container-block outer-container">
        <div class="responsive-container-block inner-container">
          <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-5 content-container">
            <div class="content-box">
              <p class="text-blk section-head">
                About Us
              </p>
              <p class="text-blk section-body">
                Welcome to <strong>TRAVEL SADHU</strong>, your trusted partner in crafting unforgettable travel experiences. With years of expertise, we specialize in personalized itineraries, luxurious getaways, and adventurous expeditions. Our dedicated team is committed to turning your travel dreams into reality, ensuring every journey is seamless and enriching. Whether you're seeking a relaxing beach escape, a cultural immersion, or an adrenaline-pumping adventure, we tailor each trip to match your unique preferences. Discover the world with us and create memories that will last a lifetime.Our team of seasoned travel enthusiasts brings a wealth of knowledge and firsthand experience to provide you with the best travel advice and insider tips. We offer a comprehensive range of services, including flight and hotel bookings, guided tours, cruise packages, and all-inclusive holidays, ensuring a seamless and stress-free travel experience from start to finish.
              </p>
            </div>
          </div>
          <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-8 team-cards-outer-container">
            <div class="responsive-container-block team-cards-inner-container">
              <div class="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container">
                <div class="card1">
                  <div class="img-box">
                    <img class="person-img" src={sreyangshu}/>
                  </div>
                  <div class="card-content-box">
                    <p class="text-blk person-name">
                      Sreyangshu Sarkar
                    </p>
                    <p class="text-blk person-info">
                      Backend + Database
                    </p>
                  </div>
                </div>
              </div>
              <div class="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container">
                <div class="card1">
                  <div class="img-box">
                    <img class="person-img" src={shakyo}/>
                  </div>
                  <div class="card-content-box">
                    <p class="text-blk person-name">
                      Shakyosingha Dutta
                    </p>
                    <p class="text-blk person-info">
                      Designer + Front-end
                    </p>
                  </div>
                </div>
              </div>
              <div class="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container">
                <div class="card1">
                  <div class="img-box">
                    <img class="person-img" src={soumodeep}/>
                  </div>
                  <div class="card-content-box">
                    <p class="text-blk person-name">
                      Soumodeep Karmakar
                    </p>
                    <p class="text-blk person-info">
                      Backend + Database
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
        
    );
}

export default About;
