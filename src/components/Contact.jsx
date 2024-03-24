import React from 'react';
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID 
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const userId = import.meta.env.VITE_EMAILJS_USER_ID

export default function Contact() {

    const userDefault = {
        'from_name': '',
        'from_email': '',
        'to_name': 'Henna',
        'message': ''
    }

    const [userInfo, setUserInfo] = React.useState(userDefault)

    const handleSubmit = (event) => {
        event.preventDefault()
        
        emailjs.send( serviceId, templateId, userInfo, userId )
        .then((result) => {
            console.log("Email successfully sent", result.text)
            setUserInfo(userDefault)

        }, (error) => {
            console.log('Failed to send the email.', error.text);
        })

    }

    const handleChange = (event) => {
        setUserInfo((prevInfo) => {
            return {
            ...prevInfo,
            [event.target.name]: event.target.value
            }
         })
    }

    return (
        <section className="sec-contact" id="contact">
            <div className="container">
                <div>
                    <h1>Get in Touch</h1>               
                    <p>
                        I am happy to jump on a call to brainstorm project ideas, collaborate together, or
                        just random coffee talks ;)
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input 
                        className='form-input'
                        type='text'
                        placeholder='Your Name'
                        name='from_name'
                        value={userInfo.from_name}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <input 
                        className='form-input'
                        type='text'
                        placeholder='Your Email'
                        name='from_email'
                        value={userInfo.from_email}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <textarea
                        className='form-textarea'
                        cols='30'
                        rows='10'
                        name='message'
                        placeholder='Your Message'
                        value={userInfo.message}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <button type='submit'>Send Email</button>
                </form>                  
            </div>
        </section>
    )
}