import React from 'react'

const Button = ({btnName, btnId, btnClass, eventListener, btnValue}) => {
  return (
    <button name={btnName} onClick={eventListener} className={`calculator__btn btn ${btnClass}`} id={btnId} value={btnValue}>
        {btnValue}
    </button>
  )
}

export default Button