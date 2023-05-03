import React from 'react'

const ResetButton = ({ setToggleReset, setCalcText }) => {
  const reset = () => {
    // Whenever user clicks on reset button the 'toggleReset' variable changes and the component is rerendered
    setToggleReset((prevValue) => {
      return !prevValue
    });

    setCalcText('')
  }
  return (
    <button id='resetBtn' className='uppercase reset-btn btn' onClick={reset}>
      Reset
    </button>
  )
}

export default ResetButton