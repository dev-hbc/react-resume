import React from "react";

const Header = () => {
    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation"></a>

                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscrool" href="#home">HOME</a>
                    </li>
                    <li>
                        <a className="smoothscrool" href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a className="smoothscrool" href="#works">WORKS</a>
                    </li>
                    <li>
                        <a className="smoothscrool" href="#resume">RESUME</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;