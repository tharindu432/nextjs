import React from 'react'
import { useState } from 'react'

import Model from './Model';
import Backdrop from './Backdrop';

const Todo = (props) => {
  const [modelIsOpen,setModelIsOpen] = useState(false);
    function deleteHandler(){
        console.log(props.text)
        setModelIsOpen(true);

    }

    function closeModelHandler(){
      setModelIsOpen(false);
    }
  return (
    <div className='card'>
      <h1>{props.text}</h1>
    
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modelIsOpen? <Model/>:null }
        {/*  short way--> {modelIsOpen && <Model/>} */}
        {modelIsOpen && <Backdrop onClick={closeModelHandler}/>}
      
      

      </div>
   
  )
}

export default Todo
