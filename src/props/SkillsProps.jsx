import React from 'react'

const SkillsProps = (props) => {
  return (
    <div className='skills-props'>
      <div className='skills-sect'>
        <img src={props.logo} alt='logo'/>
        <div className='skills-text'>
          <div className='skills-title'>
              <h2>{props.title}</h2>
              <span>{props.tag}</span>
          </div>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillsProps