import React from 'react'
import Child from './Child';

const Parent = () => {
    //  const {user} = props;
    // const { name,age} = user;
  return (
    <div>
      {/* My name is {name} and my age is {age}
      {/* second way to pass props  
      <Child {...user}/> */}
      <h2>parent comp</h2>
      <Child/>
    </div>
  )
}

export default Parent
