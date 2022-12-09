import React from "react";
import logo from '../images/logo.jpg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar(){
    return (
        <div className='side-bar'>
            <img src={logo} alt='katlego-logo'/>
            <div className="parts">
                <a><FontAwesomeIcon className="icon" icon={faHome} color="#FFF"/></a>
                <a><FontAwesomeIcon className="icon" icon={faUser} color="#FFF"/></a>
                <a><FontAwesomeIcon className="icon" icon={faGear} color="#FFF"/></a>
                <a href="mailto:kaymothibe3@gmail.com"><i className="fa fa-envelope icon"></i></a>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/katlego-mothibe-78b670165/"><i className="fa fa-linkedin-square"></i></a>
                <a href="https://github.com/Kat-mmm"><i className="fa fa-github"></i></a>
                <a href="https://twitter.com/_katm___"><i className="fa fa-twitter"></i></a>
            </div>
        </div>
    )
}