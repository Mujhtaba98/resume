import React, { useState } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode

    const form =useRef();
    const[done,setdone]=useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0tknuup', 'template_5u7wfyo', form.current, 'lpRQKYDD09bTqANq5')
            .then((result) => {
                console.log(result.text);
                setdone(true);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact" id='Contact'>
            <div className="lcontact">

                <span style={{color: darkMode ? 'white' : '' }}>Get in Touch</span>
                <span>Contact me</span>
                <div className="blur cblur" style={{
                    background: "rgba(146, 217, 178, 0.48)", top: "-9rem",
                    left: "-12rem"
                }}>
                </div>
            </div>

            <div className="Rcontact">
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' placeholder='Name' className='user' required/>
            <input type="email" name='user_email' placeholder='Email' className='user' required />
            <textarea name="message" placeholder='Message' className='user' required></textarea>
            <input type="submit" value="send" className='button s-button' />
            <span>{done && alert("Thank you for contacting me ! I will get back to you as soon as possible")}</span>
            <div 
            className="blur cblur" 
            style={{ background: "rgba(146, 217, 178, 0.65"  }}>
            </div>
            </form>
            </div>
        </div >
    )
}

export default Contact