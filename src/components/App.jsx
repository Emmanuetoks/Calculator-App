import React from 'react'
import Calculator from '../pages/Calculator'


const App = () => {
    if ('virtualKeyboard' in navigator) {          navigator.virtualKeyboard.overlaysContent = true; 
     }
  return (
    <>  
      <Calculator/>
      {/* <input/> */}
    </>
  )
}

export default App