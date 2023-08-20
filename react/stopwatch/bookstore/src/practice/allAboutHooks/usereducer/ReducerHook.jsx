import React, { useReducer } from 'react';
import reducer from './reducer';

const initialValue = 0;

const ReducerHook = () => {
    //const [count,setcount] = useState();
    const [count,dispatch] = useReducer(reducer,initialValue);
  return (
    <>
        <button onClick={() => dispatch({type:"INC"})}>
            inc
        </button>  
        <h1>{count}</h1>
        <button onClick={() => dispatch({type:"DEC"})}>
            dec
        </button>
    </>
  )
}

export default ReducerHook
