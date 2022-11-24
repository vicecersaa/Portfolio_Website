import React from 'react'

const PortfolioProps = (props) => {
  return (
    <div className='portfolio'>
      <div className='portfolio-img'>
        <img src={props.img}></img>
      </div>
      <div className='portfolio-tags'>
      <h3>{props.title}</h3>
        <p>
          <span>{props.tag1}</span>
          <span>{props.tag2}</span>
          <span>{props.tag3}</span>
          <span>{props.tag4}</span>
        </p>
      </div>
    </div>
  )
}

export default PortfolioProps