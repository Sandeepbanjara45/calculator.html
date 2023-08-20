import React, { useContext } from 'react';
// import {AppContext} from "./practice/allAboutHooks/Usecontext";
import {AppContext} from "./practice/allAboutHooks/Usecontext/child.jsx"

const Child = (user) => {
    // const {name,age} = user;
    const userData = useContext(AppContext);
    
  return (
    <div>
      Child = My name is {userData.name} and my age is {userData.age}
    </div>
  )
}

export default Child
