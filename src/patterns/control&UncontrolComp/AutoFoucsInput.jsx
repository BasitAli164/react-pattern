

//! Uncontrolled component example
import React, { useEffect, useRef } from 'react'

const AutoFoucsInput = () => {
    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
        console.log(inputRef.current)

    },[])
  return <input
   type="text" 
   ref={inputRef}
   className='border rounded-2xl p-2 my-3'
   placeholder='type here...'
   />
}

export default AutoFoucsInput

//? why called this  component is uncontrolled component 
// becuase this component only  work with dom becuase here we are use useRef and ref which refers to dom and don't use any react state here
