import React from 'react'

const ResetButton = ({ setCalcText, operationSet }) => {
  const reset = () => {
    setCalcText('')
    operationSet = { num1: '', num2: '', operationName: '', result: '', outputResult: '' };
  }
  return (
    <button id='resetBtn' className='uppercase reset-btn btn' onClick={reset}>
      Reset
    </button>
  )
}

export default ResetButton