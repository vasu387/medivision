import React from 'react'
import './ContactUs.css'
import img11 from '../Image/FocusedMeditation.png'

const ContactUs = () => {
    
    return (
        <div className='tress'>
            <div className='container'>

            <div class="wrapper">
                <div class="title">
                    <h1>Contact Us !</h1>
                </div>
                <div class="contact-form">
                    <div class="input-fields">
                        <input type="text" class="input" placeholder="Name"></input>
                        <input type="text" class="input" placeholder="Email Address"></input>
                        <input type="text" class="input" placeholder="Phone"></input>
                        <input type="text" class="input" placeholder="Subject"></input>

                    </div>
                    <div class="msg">
                        <textarea placeholder="Message"></textarea>
                        <a class="btn" href="mailto:recipient@example.com">Send</a>

                    </div>
                </div>
            </div>
                <div className='boom'>
                    <img src={img11}/>
                </div>
            </div>


        </div>
    )
}

export default ContactUs