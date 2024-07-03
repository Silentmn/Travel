import React from "react";
import sundarban from "/home/ubuntu/Desktop/Travel/public/sundarban.jpg";
import darjeeling from "/home/ubuntu/Desktop/Travel/public/darjeeling.jpg";
import digha from "/home/ubuntu/Desktop/Travel/public/digha.jpg";
import shantiniketan from "/home/ubuntu/Desktop/Travel/public/shantiniketan.jpg";
import gorumara from "/home/ubuntu/Desktop/Travel/public/gorumara.jpg";
import kolkata from "/home/ubuntu/Desktop/Travel/public/kolkata.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet, HelmetProvider} from "react-helmet-async";



function Topplaces(){
    return(
        <HelmetProvider>
          <h1 className="TP">Top Places </h1>
            <div class="slider-container swiper">
      <div class="slider-content">
        <div class="card-wrapper swiper-wrapper">
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={sundarban} class="card-img" alt="" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name1">Sundarban</h2>
              <p class="description">
              The world's largest mangrove forest, a UNESCO World Heritage Site, known for its unique ecosystem and the elusive Royal Bengal Tigers.
              </p>
              <a href="/explore"><button class="button">View More</button></a>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={gorumara} class="card-img" alt="" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name1">Gorumara</h2>
              <p class="description">
              National park, rich biodiversity, Indian rhinoceros, elephant habitat, scenic landscapes, wildlife sanctuary, nature trails, conservation area.
              </p>
              <a href="/explore"><button class="button">View More</button></a>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={kolkata} class="card-img" alt="" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name1">Kolkata</h2>
              <p class="description">
              The vibrant capital of West Bengal, known for its colonial architecture, cultural festivals, and delicious street food.
              </p>
              <a href="/explore"><button class="button">View More</button></a>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={shantiniketan} class="card-img" alt="" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name1">Shantiniketan</h2>
              <p class="description">
              Cultural town, Tagore's legacy, educational hub, art and literature, Visva-Bharati University, serene environment, cultural heritage.
              </p>
              <a href="/explore"><button class="button">View More</button></a>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={digha} class="card-img" alt="" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name1">Digha</h2>
              <p class="description">
              A popular seaside resort town along the Bay of Bengal, ideal for its sandy beaches and relaxing coastal ambiance.
              </p>
              <a href="/explore"><button class="button">View More</button></a>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={darjeeling} class="card-img" alt="" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name1">Darjeeling</h2>
              <p class="description">
              A picturesque hill station famous for its tea gardens, stunning views of the Himalayas, and the historic Darjeeling Himalayan Railway.
              </p>
              <a href="/explore"><button class="button">View More</button></a>
            </div>
          </div>
          
          
          
        </div>
      </div>
      <div class="swiper-button-next swiper-navBtn"></div>
      <div class="swiper-button-prev swiper-navBtn"></div>
      <div class="swiper-pagination"></div>
    </div>
    <Helmet>
         <script src="/home/ubuntu/Desktop/Travel/public/script1.js" type="text/javascript" />
            </Helmet>
            </HelmetProvider>
        
    );
}

export default Topplaces;