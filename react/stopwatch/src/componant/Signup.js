import { useNavigate } from "react-router";
import "../App.css";
import { useState } from "react";

function Signup() {
  // let name =" "
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    const data = {
      name: name,
      email: email,
      password: password,
    };

    console.log(">>>>>>data", JSON.stringify(data));
    localStorage.setItem("userinfo", JSON.stringify(data));
  };

  const onChangeName = (event) => {
    console.log(">>>>>>>>>", event.target.value);
    setName(event.target.value);
  };
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
        <h2>Signup</h2>
        <div>
          <label>name </label>
          <input
            type="text"
            placeholder="enter your name"
            onChange={onChangeName}
          />
        </div>
        <div>
          <label>email </label>
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
        <div>
          <button onClick={onSubmit}>Signup</button>
        </div>
      </form>
      <div>
          <p>
            Already have an account
            <div onClick={() => navigate("/login")}>
              <b>Login Now</b>
            </div>
          </p>
        </div>
    </div>
  );
}

export default Signup;
