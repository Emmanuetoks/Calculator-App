import React from 'react'

const Button = ({btnName, btnId, btnClass, eventListener, btnValue}) => {
  const collectInfo = ()=>{

  }
  return (
    <button onClick={eventListener} className={`calculator__btn btn ${btnClass}`} id={btnId} value={btnValue}>
        {btnValue}
    </button>
  )
}

export default Button