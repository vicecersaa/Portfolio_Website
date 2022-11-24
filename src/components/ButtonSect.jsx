import React from 'react'

const ButtonSect = (props) => {
  
  return (
    <div className='button'>
      <button onClick={props.button1} style={{backgroundColor:props.color, color:props.color1}}>Timeline</button>
      <button onClick={props.button2} style={{backgroundColor:props.color2, color:props.color3}}>Skills</button>
    </div>
  )
}

export default ButtonSect