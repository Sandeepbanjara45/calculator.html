import React from 'react'
import { useNavigate } from 'react-router';

 function Addbutton () {
  const Navigate = useNavigate("");
  return (
    <div>
        <div>
            you want to add more item then click to AddTask button. <br/>
            <button onClick={() => Navigate("/addtask")}>AddTask</button>
        </div>
      
    </div>
  )
}

export default Addbutton;
