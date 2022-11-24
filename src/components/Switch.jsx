import React from 'react'

const Switch = (props) => {
  return (
    <div onClick={props.changeTheme} className='switch'>
      <i>{props.icon}</i>
    </div>
  )
}

export default Switch