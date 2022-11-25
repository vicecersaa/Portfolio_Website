import React from 'react'
import { Form } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className='timeline-title'>
        <h1>Contact Me</h1>
      </div>
      <form
        action="https://getform.io/f/03734071-4bd5-4614-9833-4bf1ef1c9e2a"
        method="POST"
        encType='multipart/form-data'
      >
        <input type="text" name="name" placeholder='Name'/>
        <input type="text" name="email" placeholder='Email'/>
        <textarea name='message' placeholder='Your Message'></textarea>
          <div className='contact-button'>
            <button type='submit' target='blank'>Contact Me</button>
          </div>
      </form>
    </div>
   
    </>
  )
}

export default Contact