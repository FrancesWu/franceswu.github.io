import React from "react";
import aboutMeData from "../data/aboutMeData.json";
import cover from "../img/cover.jpg";

export default function Cover(props) {
    
    
    return (
        <span className="cover-img">
            <img src={cover}></img>
        </span>
    );
}

