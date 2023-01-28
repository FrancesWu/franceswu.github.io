import React from "react";
import aboutMeData from "../data/aboutMeData.json";

export default function AboutMe(props) {
    
    
    return (
        <div>
            {aboutMeData.aboutMe}
        </div>
    );
}

