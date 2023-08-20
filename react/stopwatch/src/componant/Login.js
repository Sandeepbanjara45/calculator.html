import {  useNavigate } from "react-router";
import "../App.css";
import { useState } from "react";

function Login() {
  // let name =" "
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log("name", name);
    console.log("email", email);
    console.log("password", password);

    let data = localStorage.getItem("data");
    data = data ? JSON.parse(data) : {};

    if (data & (email === data.email)) {
      if (password === data.password) {
      } else {
        setError("wrong password");
      }
    } else {
      setError("Email not match");
    }
  };
  // const onChangeName = (event) => {
  //   console.log(">>>>>>>>>", event.target.value);
  //   setName(event.target.value);
  // };
  const onChangeEmail = (event) => {
    console.log(">>>>>>>", event.target.value);
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    console.log(">>>>>>>>", event.target.value);
    setPassword(event.target.value);
  };
  return (
    <div className="App">
      <form>
        <h2>Login</h2>

        {/* <div>
          <label>name</label>
          <input
            type="text"
            placeholder="enter your name"
            onChange={onChangeName}
          />
        </div> */}
        <div>
          <label>gmail </label>
          <input
            type="gmail"
            placeholder="enter your gmail"
            onChange={onChangeEmail}
          />
          <br></br>
        </div>
        <div>
          <label>password </label>
          <input
            type="password"
            placeholder="enter your passward"
            onChange={onChangePassword}
          />
          <br></br>
        </div>
        {error ? <p style={{color:"red"}}>{error}</p>:null}

        <div>
          <button onClick={onSubmit}>Login</button>
        </div>
      </form>
      <div>
        <p>Don't have an account!
          <div onClick={() => navigate("/signup")}>
            <b>Sign up now</b>
            </div>
        </p>
      </div>

    </div>
  );
}

export default Login;
