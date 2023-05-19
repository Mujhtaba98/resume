import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


import Keeper from "../../img/Keeper.png"
import todo from "../../img/todo.png"
import sidebar from "../../img/sidebar.png"
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    return (
        <div className="portfolio" id='Portfolio'>
            {/*head*/}

            <span style={{color: darkMode ? 'white' : '' }}>Recent Project</span>
            <span>Portfolio</span>
            
                {/*slide*/}
                <Swiper
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                    <SwiperSlide>
                        <img src={Keeper} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={todo} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sidebar} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Keeper} alt="" />
                    </SwiperSlide>


                </Swiper>

            </div>
            );
};

            export default Portfolio