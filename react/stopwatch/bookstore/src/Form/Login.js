import React, { useState } from 'react'

function Login () {

const [loginData,setLoginData] = useState(false);
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
    return (
    <div className="App">
      <div>
        <div>
          <h1>Login </h1>
        </div>
        <form>  
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div>
          <p>
            Don't have an account!
            <div onClick={() => setLoginData(true)}>
              <b>Sign up</b>
            </div>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Login;