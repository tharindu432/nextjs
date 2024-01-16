import React from 'react'

function Model(props) {
  function confirmHandler(){
    props.onConfirm();
  }

  function cancelHandler(){
    props.onCancel();
  }
  return (
    <div>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={cancelHandler} >Cancel</button>
      <button className='btn' onClick={confirmHandler}>Confirm</button>
    </div>
  )
}

export default Model;
