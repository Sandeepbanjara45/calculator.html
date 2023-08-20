import React, { useState } from 'react'

const Usestate = () => {
  const [count,setCount] = useState(0);
  return (
    <>
      <wrapper>
        <div className="container">
          <button onClick={() => setCount(count + 1)}>
            Plus
          </button>
          <h1>{count}</h1>
          <button onClick={() => (count=== 0) ? setCount(0) : setCount(count - 1)}>
            Minus
          </button>
        </div>
      </wrapper>
    </>
  )
}

export default Usestate
