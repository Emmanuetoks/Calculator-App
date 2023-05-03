import React from 'react'
import Header from '../components/Header'

const CalculatorTop = ({ calcText, setCalcText }) => {
  const handleChange = (event) => {
    setCalcText(event.target.value)
  }
  return (
    <>
      <div className='calculator__top'>
        <Header />
        <input value={calcText} onChange={handleChange} className='calculator__screen' />
      </div>
    </>

  )
}

export default CalculatorTop