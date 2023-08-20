import React from 'react'

const Childparentcomponent = (props) => {
    let data = {name:"sam",email:"sam@123.com"}
  return (
    <div>
      <h1>Name :</h1>
      <button onClick={() => props.popup(data)}>Click me </button>
    </div>
  )
}

export default Childparentcomponent
