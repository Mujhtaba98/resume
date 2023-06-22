import React from 'react';
import './Footer.css';
import wave from '../../img/wave.png';
import Instagram from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"


const Footer = () => {
    return (
        <div className='mf'>
            <div className="Footer">
                <img src={wave} alt="" style={{
                    height: "75%",
                    width: ' 100%',
                }} />
            </div>
            <div className="fcontent">
                <span>qureshimujhtaba@gmail.com</span>
                <div className="ficon">
                    <a href="https://instagram.com/i_am_mujhtaba?igshid=ZGUzMzM3NWJiOQ==">
                        <Instagram color='white' size='3rem' />
                    </a>
                    <Facebook color="white" size="3rem" />
                    <a href="https://github.com/Mujhtaba98">
                    <Github color="white" size="3rem" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer