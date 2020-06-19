import React from "react";

const About = _ => {
    return (
        <section id="about">

            <div class="row">

                <div class="three columns">
                    <img class="profile-pic" src="images/profilepic.jpg" alt=""/>
                </div>
                <div class="nine columns main-col">
                    <h2>About Me</h2>
                    <p>I'm a developer.
                    </p>

                    <div class="row">
                        <div class="columns contact-details">
                            <h2>Contact Details</h2>
                            <p class="address">
                                    <span>Hongbin Cai</span><br/>
                                    <span>XXX XXX, Montréal Quebec CA
                                    </span><br/>
                                    <span>(123)456-7890</span><br/>
                                    <span>anyone@website.com</span>
                            </p>
                        </div>
                        <div class="columns download">
                            <p>
                                <a href="#" class="button"><i class="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                    
                </div> 
            </div>
        </section>
    );
}

export default About;