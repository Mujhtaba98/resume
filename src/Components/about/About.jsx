import React from 'react'
import './About.css'
import Card from "../Card/Card";
import resume from "../about/Resume.pdf"
import heartemoji from "../../img/heartemoji.png"
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion';

const About = () => {
    const transition ={duration:1, type:'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    return (
        <div className="About" id='About'>
            {/*left side*/} 
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : '' }}>Things</span>
                <span>About me</span>
                <span>Here you can click and Download my CV
                    <br />
                    to now more about me </span>
                <a href={resume}>
                    <button className='button A-button'>Download CV</button>
                </a>
                <div className="blur" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/*right side*/}
            <div className="Card">

                <motion.div
                whileInView={{left:'20rem'}}
                initial={{left:'25%'}}
                transition={transition}
                style={{ left: '20rem' }}
                >
                    <Card
                        emoji={heartemoji}
                        heading={'As An frontend Developer Skills i Have '}
                        detail={<div style={{ textAlign: 'left' }}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>REACT J.S</li>
                            </ul>
                        </div>}
                    />
                    </motion.div>

                {/*2ndcard*/}
                <motion.div 
                initial={{top:'14rem' ,left:'-8rem'}}
                whileInView={{left:'6rem'}}
                transition={transition}
                style={{top: "14rem",left:'6rem'}}>
                    <Card
                        emoji={heartemoji}
                        heading={'Education'}
                        detail={<div>"Bachelor of Science in Information Technology (BSC.I.T)" <br />  "Master of Science in Information Technology (MSC.I.T)"</div>}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default About