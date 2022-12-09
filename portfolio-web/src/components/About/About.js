import React, { useEffect } from "react";
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About(){
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div data-aos="fade-up" className="container">
            <div data-aos="fade-right" className="about-header">
                <h2>About</h2>
                <h2 className="second">Me</h2>
                <i class="fa fa-html5 langs html" color="#FF5733 "></i>
                <i class="fa fa-css3 langs css" aria-hidden="true"></i>
                <i class="fab fa-js langs js"></i>
                <i class="fab fa-react langs react"></i>
                <i class="fab fa-python langs python"></i>
                <i class="fab fa-git langs git"></i>
            </div>
            <div className="content">
                <p>
                    I have always been passionate about technology and computers from a young
                    age. I particularly developed a passion for coding in 2020 when I learnt HTML
                    & CSS and I was amazed and exited that I could actually build a webiste. I later on
                    continued to learn JavaScript and I built resposive applications and never looked back.
                    I grew more curious about web development in 2022 after I was done learning c# data structures and algorithms, 
                    that is when I enrolled for a Full Stack development program.
                </p>
                <p>
                    I recently graduated with Udacity for the ALX Full Stack Nanodegree program,
                    where I learnt about databases and database manangement systems. I learnt backend development
                    using python, API development and documentation, Identity and Access management and containarization 
                    and deployment using docker and AWS.
                </p>
            </div>
        </div>
    )
}