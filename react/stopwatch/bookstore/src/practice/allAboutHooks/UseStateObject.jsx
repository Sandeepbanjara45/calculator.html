import React, { useState } from "react";


const UseStateObject = () => {
    const [formData,setFormData] = useState({
        username:"",
        email:"",
        password:"",
        confirm_password:"",
    })

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setFormData((prev) => {
            return { ...prev, [name]: value}
        })
        
    }

  return (
    <div>
      <h2> Register</h2>
      <form>
        <input
          type="text"
          className="form-control"
          id="name"
          name="username"
          placeholder="Name"
          autoComplete="off"
           value={formData.username}
           onChange={handleInput}
        />
        <br />
        <br />

        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={formData.email}
          onChange={handleInput}
        />
        <br />
        <br />

        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={formData.password}
          onChange={handleInput}
        />
        <br />
        <br />

        <input
          type="password"
          className="form-control"
          id="confirm_password"
          name="confirm_password"
          placeholder="confirm_password"
          autoComplete="off"
          value={formData.confirm_password}
          onChange={handleInput}
        />
        <br />
        <br />

        <button>Create Account</button>
        <br />
        <br />
      </form>
      <p>{`My name is ${formData.username} and email is ${formData.email} `}</p>
    </div>
  );
};

export default UseStateObject;
