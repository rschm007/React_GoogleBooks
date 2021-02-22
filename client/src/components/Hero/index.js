import React from "react";
import "./style.css";

const Hero = (props) => {
    return (
        <div className="hero">
            {props.children}
        </div>
    )
}

export default Hero;