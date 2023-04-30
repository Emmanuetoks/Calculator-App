import React, { useState } from 'react'
import CalculatorBottom from '../layouts/CalculatorBottom'
import CalculatorTop from '../layouts/CalculatorTop'
import '../../CSS/index.css'
import '../../CSS/themes.css'

// import theme



let operationSet;
const Calculator = () => {
  const [calcText, setCalcText] = useState('');

  React.useEffect(() => {
    operationSet = { num1: '', num2: '', operationName: '', result: '', outputResult: '' };
  }, [])

  const add = (num1, num2) => {
    return Number(num1) + Number(num2)
  }

  const multiply = (num1, num2) => {
    return Number(num1) * Number(num2)
  }

  const divide = (num1, num2) => {
    return Number(num1) / Number(num2)
  }

  const subtract = (num1, num2) => {
    return Number(num1) - Number(num2)
  }
  const calculate = (opSet) => {
    let operation;
    let { num1, num2, operationName } = opSet;
    let tempResult;

    if (operationName === '+') {
      operation = add
      // console.log('addition was carried out');
    } else if (operationName === 'x') {
      operation = multiply
      // console.log('multiplication was carried out');
    } else if (operationName === '-') {
      operation = subtract
      // console.log('subtraction operation was carried out');
    }else if (operationName === '/'){
      operation = divide
      // console.log('division was carried out');
    }

    if (num2 === '') {
      if (operationName === '+' || operationName === '-') {
        num2 = 0;
      } else if (operationName === 'x' || operationName === '/') {
        num2 = 1
      }
    }
    if (operationName != '') {
      if (operationSet.num1 != '' && operationSet.num2 != '') {
        let storedResult;
        storedResult = operation(num1, num2);
        operationSet.result = storedResult;
        operationSet.outputResult = operationSet.result

      } else {
        tempResult = operation(num1, num2)
        operationSet.outputResult = tempResult
      }

    } else if (operationName === '') {
      operationSet.outputResult = num1
    }
  }

  const handleInfo = (event) => {
    let eventClass = event.target.classList;
    let eventValue = event.target.value

    if (operationSet.result === '') {
      if (eventClass.contains('number')) {
        if (operationSet.operationName === '') {
          operationSet.num1 += eventValue;
        } else {
          operationSet.num2 += eventValue

        }
      } else if (eventClass.contains('operation')) {
        operationSet.operationName = eventValue
        console.log(operationSet.operationName);

      }
    } else if (operationSet.result != '') {
      if (eventClass.contains('operation')) {
        operationSet.operationName = eventValue
        console.log(operationSet.operationName);
        operationSet.num1 = operationSet.result
        operationSet.num2 = '';
      } else {
        operationSet.num2 += eventValue
      }
    }

    calculate(operationSet)
    setCalcText((prevValue) => {
      return prevValue + [event.target.value]
    })
  }

  return (
    <div className='bg flex'>
      <main>
        <div className='calculator grid'>
          <CalculatorTop calcText={calcText} setCalcText={setCalcText} />
          <CalculatorBottom setCalcText={setCalcText} handleInfo={handleInfo} operationSet={operationSet} />
        </div>
      </main>
    </div>
  )
}

export default Calculator