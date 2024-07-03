import React from "react";
import twit from "/home/ubuntu/Desktop/Travel/public/twitter-x-seeklogo-3.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./slider";
import Topplaces from "./topplaces";

function Is(){
    return(
        <div >
            <Slider/>
            <Topplaces/>
        </div>
    );
}
export default Is;