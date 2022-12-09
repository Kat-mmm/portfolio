import React from "react";
import './App.css';
import kat from '../images/KM.jpeg';

export default function Header(){
    return (
        <div className="container">
            <div className="header">
                <h5>&#60;body&#62;</h5>
                <h5 className="h1">&#60;h1&#62;</h5>
                <h1>Hi, I'm Katlego Mothibe</h1>
                <h1 className='job'>Software <span>Developer.</span></h1>
                <p>I'm a developer who likes building things for the web. I build Frontend web applications and also Full Stack apps.</p>
                <h5 className="h1">&#60;/h1&#62;</h5>
                <h5>&#60;/body&#62;</h5>
            </div>
            <img src={kat} alt='Katlego' />
        </div>
    )
}