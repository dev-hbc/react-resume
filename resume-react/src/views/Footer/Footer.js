import React from "react";

const Footer = _ => {
    return (
        <footer>
            <div class="row">
                <div class="twelve columns">
                    <ul class="social-links">
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-github"></i></a></li>
                    </ul>
                    <ul class="copyright">
                        <li>© Theme Copyright 2014 CeeVee</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
                    </ul>
                </div>
                <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>
            </div>
        </footer>
    );
}

export default Footer;