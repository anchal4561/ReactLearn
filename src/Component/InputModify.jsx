import React from 'react'
import InputBox from './InputBox';

const InputModify = () => {
    const arr=[{
        id:"anc",
        
    },{
        name:"avni"
    },{
        email:"anchal37@gmail.com"
    },{
        mobileNo:8193024111
    }]
    
  return (
    <div>
       { arr.map((e,i)=> {
        return(
            <InputBox key={i} initialVal={Object.values(e)[0]}/>
        )
       }
            
           )}
        </div>
  )
}

export default InputModify