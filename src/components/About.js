import React, { Component } from 'react';
import happyBoy from '../images/happyBoy.png';
import R2Disney from '../images/R2Disney.JPG';
import '../css/about.css';

class About extends Component {
    render () {
        return(
            <div className="About">
                <h2 className="page-title">About</h2>
                    <p className="openingFill">Hi, I'm Brian Heptinstall, a front-end engineer and software testing engineer. 
                       I’m based in Birmingham, Alabama, where I currently work for healthgrades.com. I also previously spent 
                       time with BBVA Compass Bank as an automated software tester. With an emphasis on HTML5, CSS3, 
                       Javascript, ReactJS, APIs and more, I'm keeping my skills up-to-date with the latest technology advances.</p>
                       <img className="R2Disney" src={R2Disney} alt="R2D2 and Brian" />

                    <p className="middleParagraph">I'm one of those coding boot camp grads. After a 20-year career as a chef at 
                       places like Walt Disney World, Mar-A-Lago (yes that one), and the Waldorf-Astoria, I decided I wanted
                       more time using my brain and less time on my feet. I graduated from The Iron Yard Orlando in 2016, 
                       where I spent more than 1,000 hours working on 34 projects.</p>

                    <p className="personal">When home, I’m with my wife, Kristen, our young son, Vonn, and our chocolate Labrador, Mango. 
                       You can usually find me working in our garden or cooking up dinner for the family. Some of my hobbies 
                       include guitar and drums, loud music, poker, being outdoors, and of course, Alabama football. It's how 
                       I got my nickname, “Bama,” while living in Florida.</p>
                       
                       <img className="happyBoy-image" src={happyBoy} alt="happyBaby" />
                    <p className="about-footer">Check out my work here and feel free to connect with me on 
                    <a className="aboutLink" href="https://www.linkedin.com/in/bheptin/">LinkedIn</a>. 
                    I’m also on <a className="aboutLink" href="https://twitter.com/bheptin">Twitter</a>, but I’m not much of a Tweeter.</p>
                        

            </div>
        )
    }
}

export default About;