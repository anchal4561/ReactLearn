import React, { useState } from 'react'

const InputBox = ({initialVal}) => {
    
    const [inputState, setInputState]=useState(initialVal)
  return (
    <div>
          <input className='input' placeholder='Enter your name' value={inputState}
         onChange={(e)=>setInputState(e.target.value) }/>
         <p>{inputState}</p>
   </div>
  )
}

export default InputBox