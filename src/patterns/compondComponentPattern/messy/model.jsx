//! it is the exmaple of how we make component with messy method

const Model = ({title,body,secondaryAction,primaryAction}) => {
  return (
   <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
     <div className='bg-white rounded-2xl p-4 w-96 relative'>
        <h2 className='font-bold mb-4'>{title}</h2>
        <p className='model-body'>{body}</p>
        <div className='flex justify-end gap-2 mt-4'>
            {secondaryAction}
            {primaryAction}
        </div>
      
    </div>
   </div>
  )
}

export default Model


//? the problem in this type of component is that here we handle both the layout of the ui structure and another is variation of content and the third issue is this is registly assocaited to only delete account modal and here if we required to add or remove then we increase or decrease props , which issue in scalability
