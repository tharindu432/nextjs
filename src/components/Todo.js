import React,{useState} from 'react';


import Model from './Model';
import Backdrop from './Backdrop';

function Todo(props){
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
        {modelIsOpen? <Model onCancel={closeModelHandler} onConfirm={closeModelHandler}/>:null }
        {/*  short way--> {modelIsOpen && <Model/>} */}
        {modelIsOpen && <Backdrop onCancel={closeModelHandler}/>}
      
      

      </div>
   
  );
}

export default Todo;
