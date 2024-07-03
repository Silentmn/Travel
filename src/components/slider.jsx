import React from "react";
import twit from "/home/ubuntu/Desktop/Travel/public/twitter-x-seeklogo-3.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet, HelmetProvider} from "react-helmet-async";



function Slider(){
    return(
        <HelmetProvider>
            <div className="slider">
                 
                <div className="container">
        <div className="slide"> 
            <div className="item six">
                <div className="content">
                    <div className="name">GORUMARA</div>
                    <div className="des">National park, rich biodiversity, Indian rhinoceros, elephant habitat, scenic landscapes, wildlife sanctuary, nature trails, conservation area.</div>
                    
                </div>
            </div>
            <div className="item one">
                <div className="content">
                    <div className="name">DIGHA</div>
                    <div className="des">A popular seaside resort town along the Bay of Bengal, ideal for its sandy beaches and relaxing coastal ambiance.</div>
                    
                </div>
            </div>
            <div className="item two">
                <div className="content">
                    <div className="name">DARJEELING</div>
                    <div className="des"> A picturesque hill station famous for its tea gardens, stunning views of the Himalayas, and the historic Darjeeling Himalayan Railway.</div>
                    
                </div>
            </div>
            <div className="item three">
                <div className="content">
                    <div className="name">KOLKATA</div>
                    <div className="des">The vibrant capital of West Bengal, known for its colonial architecture, cultural festivals, and delicious street food.</div>
                    
                </div>
            </div>
            <div className="item four">
                <div className="content">
                    <div className="name">SUNDARBAN</div>
                    <div className="des">The world's largest mangrove forest, a UNESCO World Heritage Site, known for its unique ecosystem and the elusive Royal Bengal Tigers.</div>
                    
                </div>
            </div>
            <div className="item five">
                <div className="content">
                    <div className="name">SHANTINIKETAN</div>
                    <div className="des">Cultural town, Tagore's legacy, educational hub, art and literature, Visva-Bharati University, serene environment, cultural heritage.</div>
                    
                </div>
            </div>
        </div>
        <div className="button1">
            <button className="pre"><i className="fa-solid fa-arrow-left"></i></button>
            <button className="nex"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    </div> 
    </div>
    <Helmet>
              <script src="/home/ubuntu/Desktop/Travel/public/script.js" type="text/javascript" />
            </Helmet>
            </HelmetProvider>
            
        
    );
}

export default Slider;