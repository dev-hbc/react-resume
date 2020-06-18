import React from "react";

const Banner = _ => {

    const responsiveHeadlineStyle = {
        fontSize: "86.5px"
    }
    return (
        <div class="row banner">
            <div class="banner-text">
                <h1 class="responsive-headline" style={responsiveHeadlineStyle}>
                    I'm Hongbin Cai.
                </h1>
                <h3>I'm a <span>Software Engineer</span> living in Montréal. Currently I am looking for a Fulltime Position related to Web Application Development. It could be Full-Stack, FrontEnd or Backend. 
                Let's <a class="smoothscroll" href="#about">start scrolling</a> and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
                <hr/>
                <ul class="social">
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;