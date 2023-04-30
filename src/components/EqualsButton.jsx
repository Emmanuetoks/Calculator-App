import React from 'react'

const EqualsButton = ({ setCalcText, operationSet }) => {
  const add = (num1, num2) => {
    return num1 + num2
  }
  const calculate = (params) => {
    let result;
    const { num1, num2, operation } = params;

    if (operation === 'add') {
      operationSet.result = add(Number(num1), Number(num2));
    }


    // setCalcText(operationSet.result);
  }

  const handleCalculate = () => {

    setCalcText(operationSet.outputResult)


  }
  return (
    <button id='equalsBtn' className='uppercase equals-btn btn' onClick={handleCalculate}>
      =
    </button>
  )
}

export default EqualsButton