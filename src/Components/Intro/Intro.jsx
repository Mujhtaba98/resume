import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import glassem from "../../img/glassesimoji.png"; 
import Floatingdiv from '../Floatingdiv/Floatingdiv';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion';

const Intro = () => {
    const transition ={duration:2, type:'spring'};
    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode ? 'white' : '' }}>hii i Am </span>
                    <span>Mujhtaba Qureshi</span>
                    <span>Frontend developer seeking challenges opportunity in the web development domain ,
                        so as to learn and grow as an individual</span>
                </div>
                <a href="mailto:qureshimujhtaba@gmail.com">
                <button className=" i-button button">Hire me</button>
                </a>
                <div className="i-icons">
                <a href="https://github.com/Mujhtaba98">
                <img src={Github} alt="githubicon" />
                </a>
                <a href="http://www.linkedin.com/in/mujhtaba-qureshi">
                <img src={Linkedin} alt="linkedinicon" />
                </a>
                <a href="https://instagram.com/i_am_mujhtaba?igshid=ZGUzMzM3NWJiOQ==">
                <img src={Instagram} alt="instagramicon" />
                </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />

                <motion.img
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                 src={glassem} alt="" />
                 
                <motion.div 
                initial={{top:'-4%' ,left:'74%'}}
                whileInView={{left:'68%'}}
                transition={transition}
                
                style={{ top: '-4%', left: '68%' }}
                className='floating-div'>
                    <Floatingdiv img={Crown} txt1='web' txt2='developer' />
                </motion.div>
                <div className="blur" style={{ background: '#c1f5ff' }}>
                </div>
                <div className="blur" style={{
                    background: "rgba(238, 210, 255)",
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '9rem'
                }}>
                </div>
            </div>
        </div>
    )
}

export default Intro