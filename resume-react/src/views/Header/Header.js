import React, {Fragment} from "react";
import headerBackgroundImg from "../../resources/images/header-bg-img-photo-1591686850456-2d8a0f3a5497.jpg";

const Header = ({
    banner = <Fragment/>
}) => {

    const headerStyle = {
        background: "center / contain no-repeat " + "url(" + headerBackgroundImg + ")"
    }
    return (
        <header id="home" style={headerStyle}>
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
                        <a className="smoothscrool" href="#portfolio">WORKS</a>
                    </li>
                    <li>
                        <a className="smoothscrool" href="#resume">RESUME</a>
                    </li>
                </ul>
            </nav>

            {banner}
            
            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle" />
                </a>
            </p>
        </header>
    )
}

export default Header;