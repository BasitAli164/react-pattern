
//! Controlled component example 
import React, {  useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1)
    }
  return (
    <div className='space-y-4'>
      <h2 className='text-2xl'>Count: {count}</h2>
      <button className='bg-purple-500 text-white p-1 rounded ' onClick={increment}>increment</button>
    </div>
  )
}

export default Counter

//? why called this  component is controlled component 
// becuase this component only use react state not work with dom(useRef or ref)