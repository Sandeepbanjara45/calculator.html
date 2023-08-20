import React, { useState,useEffect } from 'react'

const UseEffect = () => {
  const [count,setCount] = useState(0);
  
  const countUpdate = (val) => 
  {
      if(val==="inc") return setCount(count + 1);
      if(val==="dec") return setCount(count - 1);
      
  }
  useEffect(() => {//no dependency  passed
   document.title = count; 
  },[count]);

  return (
    <>
    <wrapper>
      <div className="container">
        <button onClick={() => countUpdate("inc")}>
          Plus
        </button>
        <h1>{count}</h1>
        <button onClick={() => countUpdate("dec")}>
          Minus
        </button>
      </div>
    </wrapper>
  </>
  )
}

export default UseEffect
