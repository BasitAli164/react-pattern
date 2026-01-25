import React from 'react'

const DefaultSlotCard = ({children}) => {
  return (
    <div
    style={
        {
            border:"1px solid #ddd",
            borderRadius:8,
            padding:15,
            maxWidth:500
        }
    }
    >
        {children}
      
    </div>
  )
}

export default DefaultSlotCard
