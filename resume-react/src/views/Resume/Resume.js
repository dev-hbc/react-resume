import React from "react";

const Resume = _ => {

    return (
        <section id="resume" class="">
            <div class="row education">
                <div class="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div class="nine columns main-col">
                    <div class="row item">
                        <div class="twelve columns">
                            <h3>University</h3>
                            <p class="info">Master in Field <span>•</span> <em class="date">April 2019</em></p>
                            <p>
                                COMMENT
                            </p>
                        </div>
                    </div>

                    <div class="row item">
                        <div class="twelve columns">
                            <h3>School</h3>
                            <p class="info">B.A. Degree in Field <span>•</span> <em class="date">March 2018</em></p>
                            <p>
                                COMMENT
                            </p>
                        </div>
                    </div> 
                </div>
            </div>
            
            <div class="row work">

                <div class="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>

                <div class="nine columns main-col">
                    <div class="row item">
                        <div class="twelve columns">

                            <h3>Awesome Studio</h3>
                            <p class="info">Designer <span>•</span> <em class="date">March 2010 - Present</em></p>
                            <p>
                                DESCRIPTION
                            </p>
                        </div>
                    </div>

                    <div class="row item">
                        <div class="twelve columns">
                            <h3>Cool Studio</h3>
                            <p class="info">Designer <span>•</span> <em class="date">March 2007 - February 2010</em></p>
                            <p>
                                DESCRIPTION
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row skill">
                <div class="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div class="nine columns main-col">
                    <p>
                        SKILL SUMMARY
                    </p>

                    <div class="bars">
                        <ul class="skills">
                            <li><span class="bar-expand photoshop"></span><em>Photoshop</em></li>
                            <li><span class="bar-expand illustrator"></span><em>Illustrator</em></li>
                            <li><span class="bar-expand wordpress"></span><em>Wordpress</em></li>
                            <li><span class="bar-expand css"></span><em>CSS</em></li>
                            <li><span class="bar-expand html5"></span><em>HTML5</em></li>
                            <li><span class="bar-expand jquery"></span><em>jQuery</em></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Resume;



// WEBPACK FOOTER //
// ./src/Components/Resume.js