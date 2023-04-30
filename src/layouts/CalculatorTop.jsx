import React from 'react'
import Header from '../components/Header'

const CalculatorTop = ({ calcText, setCalcText }) => {
  const handleChange = (event) => {
    setCalcText(event.target.value)

    console.log(event.target.value);
  }
  return (
    <>
      <div className='calculator__top'>
      <Header />
        <div className='calculator__screen flex'>
          <h1 className='calculator__screen-text'>{calcText}</h1>
        </div>
      </div>
    </>

  )
}

export default CalculatorTop