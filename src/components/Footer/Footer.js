import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="junbotron-fluid footer-bg footer-color mt-5">
        <div className="container group-margin">

                <div className="row">
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-3">
                                <h4>Contact Us</h4>

                            </div>
                            <div className="col-md-3">
                                <h4>Courses</h4>
                                <ul className="list-type">
                                    <li><a className="list-color" href="#html">HTML</a></li>
                                    <li><a className="list-color" href="#css">CSS</a></li>
                                    <li><a className="list-color" href="#bootstrap">Bootstrap</a></li>
                                    <li><a className="list-color" href="#javascript">JavaScript</a></li>
                                    <li><a className="list-color" href="#express">Express</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4>Courses</h4>
                                <ul className="list-type">
                                    <li><a className="list-color" href="#nodejs">NodeJS</a></li>
                                    <li><a className="list-color" href="#react">React</a></li>
                                    <li><a className="list-color" href="#react-native">React-Native</a></li>
                                    <li><a className="list-color" href="#react-redux">React-Redux</a></li>
                                    <li><a className="list-color" href="#mongodb">MongoDB</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4>Courses</h4>
                                <ul className="list-type">
                                    <li><a className="list-color" href="#mysql">MySQL</a></li>
                                    <li><a className="list-color" href="#python">Python</a></li>
                                    <li><a className="list-color" href="#django">Django</a></li>
                                    <li><a className="list-color" href="#c++">C++</a></li>
                                    <li><a className="list-color" href="#C#">C#</a></li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                    
                </div>
    
    
                
                <div className="row justify-content-center group-margin copyright mt-5">
                    <p>Designed by Siydul Islam Sojib</p>
                </div>
                
    
                
        </div>
    </div>
    );
};

export default Footer;