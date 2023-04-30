import React from 'react'
import Button from '../components/Button'
import DeleteButton from '../components/DeleteButton'
import EqualsButton from '../components/EqualsButton'
import ResetButton from '../components/ResetButton'

const CalculatorBottom = ({ setCalcText, handleInfo, operationSet}) => {
  return (
    <div className='calculator__btm grid'>
      <Button btnName={7} btnClass={'number'} eventListener={handleInfo} btnValue={'7'} />
      <Button btnName={8} btnClass={'number'} eventListener={handleInfo} btnValue={'8'} />
      <Button btnName={9} btnClass={'number'} eventListener={handleInfo} btnValue={'9'} />
      <DeleteButton/>
      <Button btnName={4} btnClass={'number'} eventListener={handleInfo} btnValue={'4'} />
      <Button btnName={5} btnClass={'number'} eventListener={handleInfo} btnValue={'5'} />
     <Button btnName={6} btnClass={'number'} eventListener={handleInfo} btnValue={'6'} />
      <Button btnClass={'operation'} btnValue={'+'} btnName={'add'} eventListener={handleInfo} />
      <Button btnName={1} btnClass={'number'} eventListener={handleInfo} btnValue={'1'} />
      <Button btnName={2} btnClass={'number'} eventListener={handleInfo} btnValue={'2'} />
      <Button btnName={3}  btnClass={'number'} eventListener={handleInfo} btnValue={'3'} />
      <Button btnClass={'operation'} btnValue={'-'} btnName={'subtract'} eventListener={handleInfo} />
      <Button btnName={'point'} btnClass={'number'} eventListener={handleInfo} btnValue={'.'} />
      <Button btnName={0} btnClass={'number'} eventListener={handleInfo} btnValue={'0'} />
      <Button btnClass={'operation'} btnValue={'/'} btnName={'divide'} eventListener={handleInfo} />
      <Button btnClass={'operation'} btnValue={'x'} btnName={'multiply'} eventListener={handleInfo} />
      <EqualsButton setCalcText = {setCalcText} operationSet={operationSet}/>
      <ResetButton setCalcText = {setCalcText} operationSet={operationSet}/>
    </div>
  )
}

export default CalculatorBottom