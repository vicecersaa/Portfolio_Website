import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className='timeline-title'>
        <h1>Contact Me</h1>
      </div>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Email'/>
      <textarea>Your Message</textarea>
    </div>
    <div className='contact-button'>
      <button>Contact Me</button>
    </div>
    </>
  )
}

export default Contact