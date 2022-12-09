import React from "react";
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Skills(){
    return(
        <div className="skills">
            <h5>&#60;body&#62;</h5>
            <h5 className="section">&#60;section&#62;</h5>
            <i class="fa fa-html5 langs" color="#FF5733 "></i>
            <i class="fa fa-css3 langs" aria-hidden="true"></i>
            <i class="fab fa-js langs"></i>
            <i class="fab fa-react langs"></i>
            <i class="fab fa-python langs"></i>
            <h5 className="section">&#60;/section&#62;</h5>
            <h5>&#60;/body&#62;</h5>
        </div>
    )
}