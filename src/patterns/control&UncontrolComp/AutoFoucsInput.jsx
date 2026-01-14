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
