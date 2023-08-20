import React, { useState } from 'react'

const Addtask = () => {
    const [tname,setTname] = useState("");
    const [date,setDate] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("task name",tname);
        console.log("date",date);
        const taskvalue = {
          name:tname,
          date:date,
        };
        console.log(">>>>>>data", JSON.stringify(taskvalue));
        localStorage.setItem("userinfo", JSON.stringify(taskvalue));
    }
    const onChangeName = (event) => {
        console.log(">>>>",event.target.value);
        setTname(event.target.value);
    }

    const onChangeDate = (event) => {
        console.log(">>>>",event.target.value);
        setDate(event.target.value);
    }

  return (
    <div className='App'>
    <h1>Add Task</h1>
    <form>
      <label htmlFor='txt'  >TaskName:</label>
      <input type='text' id='txt' onChange={onChangeName} value={tname}/><br/>
      <label htmlFor='dt'  >Date: </label>
      <input type='date' id='dt' onChange={onChangeDate} value={date}/><br/>
      <button type='submit' onClick={onSubmit}>Submit</button>
      </form>
      
    </div>
  )
}

export default Addtask;
