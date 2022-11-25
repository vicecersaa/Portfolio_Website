import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-social'>
      <a target="blank" alt="david" href='https://www.instagram.com/davidliefc/'>
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a target="blank" alt='vicece' href='https://github.com/vicece/'> 
        <i class="fa-brands fa-github"></i>
      </a>
      <a target="blank" alt='davidlielink' href='https://www.linkedin.com/in/david-lie-45b423258/'>
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a target='blank' alt='davidlie' href='https://api.whatsapp.com/send?phone=6285156921649&text=Hello'>
        <i class="fa-brands fa-whatsapp"></i>
      </a>
      </div>  
      <p>© 2022 David Lie. All rights reserved.</p>
    </div>
  )
}

export default Footer